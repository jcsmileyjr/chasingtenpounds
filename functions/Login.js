var Airtable = require('airtable');
var base = new Airtable({apiKey:process.env.key}).base(process.env.baseId);

const table = base('monsters');

const getRecords = async () => {
  const records = await table.select().firstPage();// Get all records from the database
  return (records);
}

const teamTable = base('teams');

const getTeamStartDates = async () => {
  const teamStartDates = await teamTable.select().firstPage();
  return teamStartDates;
}

exports.handler = async function(event, context, callback) {
    const userEmail = JSON.parse(event.body);
    const startDates = await getTeamStartDates(); // Make API call to database and get all users.
    const Users = await getRecords(); // Make API call to database and get all users.
    const ifValid = checkIfSignedUp(userEmail, Users); // Check if the authenicated user is a valid player
    const data = ifValid ? organizeTeamData(userEmail, Users, startDates) : [];// if user is valid, return organize teams else a blank array

    const loginData = {
      validUser: ifValid,
      teamData: data,
    }
  
    callback(null, {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(loginData),
    });
  };

// Method to check if the user.email from auth0 is matches an email in our database (current is a demo database)
  const checkIfSignedUp = (value, Users) => {
    let signedUp = false;
    Users.forEach((player) => {
      if(player.fields.email === value){
        signedUp = true;
      }
    })
    return signedUp;
  }

  const getCurrentWeek = (startDates, userTeamName) => {
    const currentTeam = startDates.find(team => team.fields.teamName === userTeamName);
//console.log(currentTeam);
//console.log(`The ${userTeamName} start date is ${currentTeam.fields.startDate}`);
    if(currentTeam === undefined){
      return 1;
    }else{
      const dateArray = currentTeam.fields.startDate.split('-');
      const newDateArray = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
      const todayDate = new Date();
  //console.log(newDateArray)
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
console.log(team);
      teamDetails.currentWeek = getCurrentWeek(startDates, team);/**TODO: Functionality & data to dynamically get current week */
console.log(teamDetails.currentWeek);
      let teamOfPlayers = [];
      Users.forEach(player => {
        const checkIfOnSameTeam = player.fields.teams.includes(team);
        const minutesInADay = 86400000; // Number of milliseconds in a day
        // Today Date in milliseconds - minus the player last update date divide by minutes in a day
        const daysSinceLastUpdate = Math.round(Math.abs((Date.parse(new Date()) - Date.parse(player.fields.lastUpdate))/minutesInADay))
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