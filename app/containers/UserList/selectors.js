import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userList state domain
 */

const selectUserListDomain = state => state.get('userList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserList
 */

const makeSelectUserList = () =>
  createSelector(selectUserListDomain, substate => substate.get('users'));

export default makeSelectUserList;
export { selectUserListDomain };
