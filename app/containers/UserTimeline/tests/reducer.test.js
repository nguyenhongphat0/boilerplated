import { fromJS } from 'immutable';
import userTimelineReducer from '../reducer';

describe('userTimelineReducer', () => {
  it('returns the initial state', () => {
    expect(userTimelineReducer(undefined, {})).toEqual(fromJS({}));
  });
});
