import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { countersReducer } from 'src/scenes/counter/store';

const rootReducer = combineReducers({
  counters: countersReducer,
  router: routerReducer,
});

export default rootReducer;
