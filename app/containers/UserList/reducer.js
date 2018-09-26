/*
 *
 * UserList reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_USERLIST_ACTION, USERLIST_LOADED_ACTION } from './constants';

export const initialState = fromJS({
  users: []
});

function userListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERLIST_ACTION:
      return state;

    case USERLIST_LOADED_ACTION:
      console.log(action.users)
      return state
        .set('users', action.users)
    
    default:
      return state;
  }
}

export default userListReducer;
