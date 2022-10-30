import { createContext, useContext, useMemo, useReducer } from 'react';

import { Action, ContextProps, ProviderProps, State } from './models';
import types from './types';

// Reusable Action Creator
const changeState = (type: string, payload: Object): Action => ({
  type,
  payload
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case types.startTimeChanged:
      return { ...state, startTime: action.payload.startTime, endTime: '' };
    case types.endTimeChanged:
      return { ...state, endTime: action.payload.endTime };
    case types.numOfDaysChanged:
      return { ...state, numOfDays: action.payload.numOfDays };
    default:
      return state;
  }
};

const initialState: State = {
  startTime: 'NOW - 3days',
  endTime: '',
  numOfDays: '3 days'
};

const Context = createContext<State | any>(initialState);

function Provider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// useAppContent hook
const useAppContext = () => useContext<ContextProps>(Context);

export { Provider, changeState, types, useAppContext };
