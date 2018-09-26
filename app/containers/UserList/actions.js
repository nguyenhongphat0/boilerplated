/*
 *
 * UserList actions
 *
 */

import { LOAD_USERLIST_ACTION, USERLIST_LOADED_ACTION } from './constants';

export function loadUserList() {
  return {
    type: LOAD_USERLIST_ACTION,
  };
}

export function userListLoaded(users) {
  return {
    type: USERLIST_LOADED_ACTION,
    users
  }
}