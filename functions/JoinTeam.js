var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const userTable = base('monsters'); // connect to monster, aka 'users' database

const getRecords = async () => {
  const records = await userTable.select().firstPage();// Get all records from the database
  return (records);
}

const updateRecord = async (fields) => {
  await userTable.update([fields]); // Update record to airtable.com database
}

const teamTable = base('teams'); //connect to teams database

const getTeamStartDates = async () => {
  const teamStartDates = await teamTable.select().firstPage();
  return teamStartDates;
}
  
// API to join an exsisting team by a signned up player
exports.handler = async function(event, context, callback) {
  const userData = JSON.parse(event.body);// contains the user's email and team name the player wishes to join

  const Users = await getRecords(); // Make API call to database and get all users.
  const startDates = await getTeamStartDates(); // Make API call to database and get teams names/start dates.
  
  updatePlayerInDatabase(userData, Users); // Make API call to update player information in the airtable.com database

  const updatedData = updateUserTeams(userData, Users, startDates);// Update user's joined team names inside the local Users data and organize all users into teams 
  
  callback(null, {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(updatedData),
  });
};

// Update the current player's teams in the database
const updatePlayerInDatabase = async (userData, Users) => {
  const currentUser = Users.find(player => player.fields.email === userData.userEmail); // Find current player from database of players
  const newTeamStartDate = `${userData.newTeamName}-${currentUser.fields.weightLoss}` // Create a new team with the current weight
  const allTeams = `${currentUser.fields.teams},${newTeamStartDate}`// Add new team with start weight to list of teams

  // Create an object to update corrosponding object in database
  const updatedUser = {
    id: currentUser.id,
    fields:{
      teams:allTeams
    }
  }

  updateRecord(updatedUser);
}
  
// Based on the user's email, find the user in the data, update teams and then organize into teams
const updateUserTeams = (newUserData, Users, startDates) => {
    const updatedUsers = Users.map((player) => {
      if(player.fields.email === newUserData.userEmail){
        const newTeamStartDate = `${newUserData.newTeamName}-${player.fields.weightLoss}` // Create a new team with the current weight
        const allTeams = `${player.fields.teams},${newTeamStartDate}`
        player.fields.teams = allTeams;
      }      
      return player      
    });

    const updatedState = organizeTeamData(newUserData.userEmail, updatedUsers, startDates);// Using the modifed Users array, return organized teams 

    return updatedState;
  }
  
    
  // Function to get the number of weeks a competition has been playing for
  const getCurrentWeek = (startDates, userTeamName) => {
    const currentTeam = startDates.find(team => team.fields.teamName === userTeamName);// find ateam from the online database and compare to current team
    if(currentTeam === undefined){
      return 1;
    }else{
      const dateArray = currentTeam.fields.startDate.split('-'); // Fix a date bug. Example is 8-14-2020, which dose not translate into a date()
      const newDateArray = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
      const todayDate = new Date();
      const minutesInADay = 24*60*60*1000;
      const officialTeamStartDate = new Date(newDateArray);
      const numberOfDays = Math.round(Math.abs((todayDate.getTime() - officialTeamStartDate.getTime())/(minutesInADay)));

      if(numberOfDays <= 7){
        return 1; /*If challenge just started, it will output 1 instead of 0*/
      }
      else{
        return Math.round(numberOfDays/7);/*round to nearest Interger the number of Days divided by 7*/
      }
    }
  }

  // Based on the player's last update, the number of days since then is return (all in milliseconds)
  const determineLastUpdate = lastUpdate => {
    const minutesInADay = 86400000; // Number of milliseconds in a day
    return Math.round(Math.abs((Date.parse(new Date()) - Date.parse(lastUpdate))/minutesInADay))
  }

  // Function to create an array of  team names seperate with the start weight sanitize from it
  const getPlayerTeams = currentUser => {
    const teamNameOnly = currentUser.fields.teams.split(',')
      .map(teamWithWeight => {
        return teamWithWeight.split("-");
      })
      .map(teamWithoutWeight => {
        return teamWithoutWeight[0]
      })

    return teamNameOnly
  }
  
  // Function to update each player current weight
  const getPlayerWeightLoss = (team, player) => {
    // Convert string of team names and weights into an array
    const playerTeamWeight = player.fields.teams.split(',')
    
    //Split the strings within each array spot into another array
    .map(teamWithWeight => {
      return teamWithWeight.split("-");
    })

    let startWeight = 0;

    // Scroll through array of teams looking for a match, if found save start weight
    playerTeamWeight.forEach(userTeam => {
      if(userTeam[0] === team){
        startWeight = userTeam[1]
      }
    })
    
    return (startWeight - player.fields.weightLoss).toFixed(1);
  }

  // Based on the current user, organize the data by their teams
  const organizeTeamData = (userEmail, Users, startDates) => {
    let displayTeams = []; // Array of teams
    let playerTeams = []; // Names of the team the player is on

    const currentUser = Users.find(player => player.fields.email === userEmail); // Find current player from database of players    
    playerTeams = getPlayerTeams(currentUser) // Get current player teams and convert into an array


    // Create array of array of players by team name
    playerTeams.forEach(team => {
      let teamDetails = {};
      teamDetails.teamName = team;
      teamDetails.currentWeek = getCurrentWeek(startDates, team);/**dynamically get current week */
      let teamOfPlayers = [];
      Users.forEach(player => {
        const checkIfOnSameTeam = player.fields.teams.includes(team);
        const daysSinceLastUpdate = determineLastUpdate(player.fields.lastUpdate) 
        if(checkIfOnSameTeam){
          /*Strip all players of un-needed data*/
          const sanitizedPlayer = {};
          const weightLoss = getPlayerWeightLoss(team, player); // Update this player weightloss based on this team start weight and current weight
          sanitizedPlayer.playerName = player.fields.playerName;          
          sanitizedPlayer.weightLoss = weightLoss
          sanitizedPlayer.winner =  weightLoss >= 10 ? 'true':'false';
          sanitizedPlayer.lastUpdate = daysSinceLastUpdate;
          teamOfPlayers.push(sanitizedPlayer);
        }
      });

      teamOfPlayers.sort((a, b) =>(a.weightLoss > b.weightLoss)? 1 : -1); // Sort the players in the team  by weight loss
      teamDetails.players = teamOfPlayers; // Add teams of players to array of teams
      displayTeams.push(teamDetails);// Add teams of players to array of teams
    })
    return displayTeams;
  }