import { combineReducers } from 'redux';

import { users } from '../modules/users';
import { gyms } from '../modules/gyms';

let rootReducer = combineReducers({
  users,
  gyms
});

export default rootReducer;
