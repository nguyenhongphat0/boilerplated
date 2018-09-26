import { fromJS } from 'immutable';
import userListReducer from '../reducer';

describe('userListReducer', () => {
  it('returns the initial state', () => {
    expect(userListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
