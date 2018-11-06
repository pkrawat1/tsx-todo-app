import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import services from '../services';
import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import { composeEnhancers } from './utils';

const epicMiddleware = createEpicMiddleware({
  dependencies: services
});

epicMiddleware.run(rootEpic);

function configureStore(initialState?: object) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
