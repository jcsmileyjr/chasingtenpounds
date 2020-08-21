import React, {createContext, useReducer} from 'react';
import Users from '../data';

const initialState = ["React Context Global State works"];
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'LOGIN':
        const newState = action.payload;
        return newState;
      case 'UPDATEWEIGHT':
        const updatedState = updateUserWeight(action.payload, state)
        return updatedState;
      default:
        return initialState
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

/**
 * Get the new weight of user.
 * New API call to database to get all users
 * Based on the user's email, find the user in the data and update weight
 * Return new state to global state
 * Then make API call to update database
 */
const updateUserWeight = (newUserData, state) => {
  const updatedUsers = Users.map((player) => {
    if(player.email === newUserData.userEmail){
      player.weightLoss = player.startWeight - newUserData.weight;
    }
    return player
  });

  const updatedState = organizeTeamData(newUserData.userEmail, updatedUsers);
//console.log(updatedState);
  return updatedState;
}

  // TODO: SHOULD BE IN THE Weigh-In API FUNCTION
  // Based on the current user, organize the data by their teams
  const organizeTeamData = (userEmail, Players) => {
    let displayTeams = []; // Array of teams
    let playerTeams = []; // Names of the team the player is on

    const currentUser = Players.find(player => player.email === userEmail); // Find current player from database of players
    
    playerTeams = currentUser.teams; // Get current player array of teams

    // Create array of array of players by team name
    playerTeams.forEach(team => {
      let teamDetails = {};
      teamDetails.teamName = team;
      teamDetails.currentWeek = 1;/**TODO: Functionality & data to dynamically get current week */
      let teamOfPlayers = [];
      Players.forEach(player => {
        const checkIfOnSameTeam = player.teams.includes(team);
        if(checkIfOnSameTeam){
          /*TODO: Strip all players of  un-needed data*/
          teamOfPlayers.push(player);
        }
      });
      teamDetails.players = teamOfPlayers; // Add teams of players to array of teams

      displayTeams.push(teamDetails);// Add teams of players to array of teams
    })
//console.log(displayTeams);
    return displayTeams;
  }

export { store, StateProvider }