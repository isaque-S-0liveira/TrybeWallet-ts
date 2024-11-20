import { combineReducers } from 'redux';
import user, { UserState } from './user';

const rootReducer = combineReducers({
  user: user as (state: UserState, action: any) => UserState,
});

export default rootReducer;
