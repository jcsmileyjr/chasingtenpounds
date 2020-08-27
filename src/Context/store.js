import React, {createContext, useReducer} from 'react';

const initialState = ["React Context Global State works"];
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'LOGIN':
        const newState = action.payload;
        return newState;
      case 'SIGNUP':
        const newUserData = action.payload;
        return newUserData;
      case 'UPDATEWEIGHT':
        const userData = action.payload;
        return userData;
      default:
        return initialState
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }