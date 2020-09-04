var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('monsters');

const getRecords = async () => {
  const records = await table.select().firstPage();// Get all records from the database
  return (records);
}

const updateRecord = async (fields) => {
  await table.update([fields]);
}

const teamTable = base('teams');

const getTeamStartDates = async () => {
  const teamStartDates = await teamTable.select().firstPage();
  return teamStartDates;
}
  
exports.handler = async function(event, context, callback) {
  const userData = JSON.parse(event.body);

  const Users = await getRecords(); // Make API call to database and get all users.
  const startDates = await getTeamStartDates(); // Make API call to database and get teams names/start dates.
  
  updatePlayerInDatabase(userData, Users); // Make API call to update player information in the database

  const updatedData = updateUserWeight(userData, Users, startDates);// Update user weight loss and organize all users into teams 
  
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

// Update the current player's weight in the database
const updatePlayerInDatabase = async (userData, Users) => {
  const currentUser = Users.find(player => player.fields.email === userData.userEmail); // Find current player from database of players
  
  const todayDate = new Date();
  const convertedDate = todayDate.toLocaleDateString();

  // Create an object to update corrosponding object in database
  const updatedUser = {
    id: currentUser.id,
    fields:{
      weightLoss: String(currentUser.fields.startWeight - userData.weight),
      lastUpdate:convertedDate
    }
  }

  updateRecord(updatedUser);
}
  
// Based on the user's email, find the user in the data, update weight, update winner status, and then organize into teams
const updateUserWeight = (newUserData, Users, startDates) => {
    const updatedUsers = Users.map((player) => {
      if(player.fields.email === newUserData.userEmail){
        const newWeghtLoss = player.fields.startWeight - newUserData.weight;
        player.fields.weightLoss = String(newWeghtLoss);
        player.fields.winner = newWeghtLoss >= 10 ? 'true':'false';
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

  // Based on the current user, organize the data by their teams
  const organizeTeamData = (userEmail, Users, startDates) => {
    let displayTeams = []; // Array of teams
    let playerTeams = []; // Names of the team the player is on

    const currentUser = Users.find(player => player.fields.email === userEmail); // Find current player from database of players    
    playerTeams = currentUser.fields.teams.split(','); // Get current player teams and convert into an array

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
          sanitizedPlayer.playerName = player.fields.playerName;
          sanitizedPlayer.weightLoss = player.fields.weightLoss;
          sanitizedPlayer.winner = player.fields.winner;
          sanitizedPlayer.lastUpdate = daysSinceLastUpdate;
          teamOfPlayers.push(sanitizedPlayer);
        }
      });

      teamDetails.players = teamOfPlayers; // Add teams of players to array of teams
      displayTeams.push(teamDetails);// Add teams of players to array of teams
    })
    return displayTeams;
  }