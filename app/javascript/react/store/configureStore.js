import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let configureStore = () => {
  let middlewares = [thunkMiddleware, routerMiddleware(browserHistory)];
  let store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;

// define dev env vs prod env
