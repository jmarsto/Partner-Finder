import { combineReducers } from 'redux';

import { users } from '../modules/users';
import { gyms } from '../modules/gyms';
import { maps } from '../modules/maps';

let rootReducer = combineReducers({
  users,
  gyms,
  maps
});

export default rootReducer;
