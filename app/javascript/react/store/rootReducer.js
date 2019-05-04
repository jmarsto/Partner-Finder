import { combineReducers } from 'redux';

import { users } from '../modules/users';
import { gyms } from '../modules/gyms';
import { crags } from '../modules/crags';
import { maps } from '../modules/maps';

let rootReducer = combineReducers({
  users,
  gyms,
  crags,
  maps
});

export default rootReducer;
