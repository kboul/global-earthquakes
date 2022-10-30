import { Dispatch, ReactNode } from 'react';

interface Action {
  type: string;
  payload: {
    [property: string]: any;
  };
}

interface State {
  startTime: string;
  endTime: string;
  numOfDays: string;
}

// Provider
interface ProviderProps {
  children: ReactNode;
}

// Context
interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export type { Action, ContextProps, ProviderProps, State };
