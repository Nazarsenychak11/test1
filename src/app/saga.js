import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getUsers } from '../api/users'
import { loadUsersRequest } from './actionTypes';
import { loadUsersSuccess, loadUsersFailure } from './actions';


function* loadUsersSaga() {
  const response = yield call(getUsers);
  console.log(response)

  if (response) {
    yield put(loadUsersSuccess(response));
  } else {
    yield put(loadUsersFailure(response));
  }
}

export default function* () {
  yield all([
    yield takeLatest(loadUsersRequest, loadUsersSaga),
  ]);
}
