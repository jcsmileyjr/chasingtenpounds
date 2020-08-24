const Users = [
  {
      email:"jcsmileyjr@gmail.com",
      playerName:"JC Smiley",
      teams:[
          'MGC',
          'Smiley Family',
      ],
      startWeight: 200,
      weightLoss: 2.4,
      winner: false,
      lastUpdate: '8/15/2020'
  },
  {
      email:"jsmiley@bellsouth.net",
      playerName:"JC Smiley Sr.",
      teams:[
          'Smiley Family'
      ],
      startWeight: 160,
      weightLoss: 3.6,
      winner: false,
      lastUpdate: '8/10/2020'
  },
  {
      email:"bHadley.mgc.state.ms.us",
      playerName:"Beckett Hadley",
      teams:[
          'MGC'
      ],
      startWeight: 160,
      weightLoss: 3.6,
      winner: false,
      lastUpdate: '8/10/2020'
  }
  ];


exports.handler = function(event, context, callback) {
    const userEmail = JSON.parse(event.body);

    // Make API call to database and get all users. Simuate with Users in data.js

    const ifValid = checkIfSignedUp(userEmail); // 
    const data = organizeTeamData(userEmail); //  

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
  const checkIfSignedUp = (value) => {
    let signedUp = false;
    Users.forEach((player) => {
      if(player.email === value){
        signedUp = true;
      }
    })
    return signedUp;
  }

  // Based on the current user, organize the data by their teams
  const organizeTeamData = (userEmail) => {
    let displayTeams = []; // Array of teams
    let playerTeams = []; // Names of the team the player is on

    const currentUser = Users.find(player => player.email === userEmail); // Find current player from database of players
    
    playerTeams = currentUser.teams; // Get current player array of teams

    // Create array of array of players by team name
    playerTeams.forEach(team => {
      let teamDetails = {};
      teamDetails.teamName = team;
      teamDetails.currentWeek = 1;/**TODO: Functionality & data to dynamically get current week */
      let teamOfPlayers = [];
      Users.forEach(player => {
        const checkIfOnSameTeam = player.teams.includes(team);
        if(checkIfOnSameTeam){
          /*TODO: Strip all players of  un-needed data*/
          teamOfPlayers.push(player);
        }
      });
      teamDetails.players = teamOfPlayers; // Add teams of players to array of teams

      displayTeams.push(teamDetails);// Add teams of players to array of teams
    })
    return displayTeams;
  }