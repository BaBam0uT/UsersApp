import React, {createContext, useReducer} from 'react';

const UserContext = createContext(initialState);

const initialState = {
  list: [],
  id: 1,
  user: {}
};

const {Provider} = UserContext;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((curState, action) => {
    switch (action.type) {
      case 'SET_LIST':
        const newStateList = {
          ...curState,
          list: action.payload,
        };
        return newStateList;
      case 'SET_ID':
        const newStateId = {
          ...curState,
          id: action.payload,
        };
        return newStateId;
      case 'SET_USER':
        curState.list.splice(curState.list.findIndex((e) => e.id == action.payload.id), 1, action.payload);
        const newStateUser = {
          ...curState,
          user: action.payload,
        };
        return newStateUser;
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {UserContext, StateProvider};
