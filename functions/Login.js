var Airtable = require('airtable');
const {key, baseId} = process.env; // Get the enviroment values defined in netlify site 
var base = new Airtable({apiKey:key}).base(baseId);

const table = base('monsters');

const getRecords = async () => {
  const records = await table.select().firstPage();// Get all records from the database
  return (records);
}

exports.handler = async function(event, context, callback) {
    const userEmail = JSON.parse(event.body);
    
    const Users = await getRecords(); // Make API call to database and get all users.
    const ifValid = checkIfSignedUp(userEmail, Users); // Check if the authenicated user is a valid player
    //const data = organizeTeamData(userEmail, Users); //  TODO: WHAT IF USER IS FALSE
    const data = ifValid ? organizeTeamData(userEmail, Users) : [];

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