import { ActionType, getType } from 'typesafe-actions';

import { combineReducers } from 'redux';
import * as counters from './actions';

export type CountersAction = ActionType<typeof counters>;

export interface CountersState {
  readonly reduxCounter: number;
}

export default combineReducers<CountersState, CountersAction>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {
      case getType(counters.increment):
      case getType(counters.decrement):
        return state + action.payload;

      default:
        return state;
    }
  },
});
