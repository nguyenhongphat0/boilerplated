import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { userListLoaded } from './actions';
import { LOAD_USERLIST_ACTION } from './constants';

/**
 * Root saga manages watcher lifecycle
 */
export default function* defaultSaga() {
  yield takeLatest(LOAD_USERLIST_ACTION, fetchUsers);
}

export function* fetchUsers() {
  const url = '/users';

  const users = yield call(request, url);
  yield put(userListLoaded(users));
}