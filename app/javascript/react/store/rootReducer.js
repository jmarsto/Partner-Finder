import { combineReducers } from 'redux';

import { users } from '../modules/users';

let rootReducer = combineReducers({
  users
});

export default rootReducer;
