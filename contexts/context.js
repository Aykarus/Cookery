import React, {createContext, useReducer, useState, useEffect} from 'react';

const userStatus = {
  loggedOn: false,
  name: 'John',
};

export const UserContext = createContext(userStatus);

function reducer(state, action) {
  switch (action.type) {
    case 'TOOGLE_LOGIN':
      return {
        loggedOn: !state.loggedOn,
      };
    default:
      throw new Error();
  }
}

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, userStatus);

  const toogleLogin = () => {
    dispatch({type: 'TOOGLE_LOGIN'});
  };
  return (
    <UserContext.Provider
      value={{
        loggedOn: state.loggedOn,
        name: state.name,
        toogleLogin,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};
