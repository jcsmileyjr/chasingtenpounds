var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('monsters');

const getRecords = async () => {
  const records = await table.select().firstPage();// Get all records from the database
  return (records);
}
  
const submitRecord = async (fields) => {
  await table.create(fields);
}
  
exports.handler = async function(event, context, callback) {
  const newUser = JSON.parse(event.body);

  submitRecord(newUser);

  // Make API call to database and get all users. Simuate with Users in data.js
  const Users = await getRecords(); // Make API call to database and get all users.

  //signUpNewUser(newUser, Users);

  const data = organizeTeamData(newUser.email, Users); // Organize the data to be view in ranking

  const teamData = {
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
    body: JSON.stringify(teamData),
  });
};

// add new user to database (current is a demo database)
  const signUpNewUser = (player, Users) => {
    Users.push(player);
  }

  // Based on the current user, organize the data by their teams
  const organizeTeamData = (userEmail, Users) => {
    let displayTeams = []; // Array of teams
    let playerTeams = []; // Names of the team the player is on

    const currentUser = Users.find(player => player.fields.email === userEmail); // Find current player from database of players
    
    playerTeams = currentUser.fields.teams.split(','); // Get current player teams and convert into an array

    // Create array of array of players by team name
    playerTeams.forEach(team => {
      let teamDetails = {};
      teamDetails.teamName = team;
      teamDetails.currentWeek = 1;/**TODO: Functionality & data to dynamically get current week */
      let teamOfPlayers = [];
      Users.forEach(player => {
        const checkIfOnSameTeam = player.fields.teams.includes(team);
        if(checkIfOnSameTeam){
          /*Strip all players of un-needed data*/
          const sanitizedPlayer = {};
          sanitizedPlayer.playerName = player.fields.playerName;
          sanitizedPlayer.weightLoss = player.fields.weightLoss;
          sanitizedPlayer.winner = player.fields.winner;
          sanitizedPlayer.lastUpdate = player.fields.lastUpdate
          teamOfPlayers.push(sanitizedPlayer);
        }
      });
      teamDetails.players = teamOfPlayers; // Add teams of players to array of teams

      displayTeams.push(teamDetails);// Add teams of players to array of teams
    })
    return displayTeams;
  }