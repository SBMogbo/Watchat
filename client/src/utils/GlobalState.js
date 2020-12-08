import React, { createContext, useReducer, useContext } from "react";
import {
  LOG_IN,LOG_OUT
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case LOG_IN:
    return {
      ...state,
      account:action.payload
    };
  case LOG_OUT:
    return {
      ...state,
      account:null
    };
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    account:null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
