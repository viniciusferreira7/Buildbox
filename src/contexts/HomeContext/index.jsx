import P from 'prop-types';

import { globalState } from './data';
import { createContext, useReducer } from 'react';

export const Context = createContext();

export const reducer = (state, action) => {
  return [{ id: state.length + 1, name: action.type, message: action.payload }, ...state];
};

export const HomeContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

HomeContext.propTypes = {
  children: P.node,
};
