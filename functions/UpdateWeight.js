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
  
  exports.handler = async function(event, context, callback) {
    const userData = JSON.parse(event.body);

    const Users = await getRecords(); // Make API call to database and get all users.

    // Make API call to update player information in the database
    updatePlayerInDatabase(userData, Users);

    const updatedData = updateUserWeight(userData, Users);// Update user weight loss and organize all users into teams 
    
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
  

// Based on the user's email, find the user in the data and update weight then organize into teams
const updateUserWeight = (newUserData, Users) => {
    const updatedUsers = Users.map((player) => {
      if(player.fields.email === newUserData.userEmail){
        player.fields.weightLoss = String(player.fields.startWeight - newUserData.weight);
      }
      
      return player      
    });

    const updatedState = organizeTeamData(newUserData.userEmail, updatedUsers);// Using the modifed Users array, return organized teams 

    return updatedState;
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