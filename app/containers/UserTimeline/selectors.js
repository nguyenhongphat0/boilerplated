import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userTimeline state domain
 */

const selectUserTimelineDomain = state =>
  state.get('userTimeline', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserTimeline
 */

const makeSelectUserTimeline = () =>
  createSelector(selectUserTimelineDomain, substate => substate.toJS());

export default makeSelectUserTimeline;
export { selectUserTimelineDomain };
