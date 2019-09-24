import { all, spawn } from 'redux-saga/effects';
import appSaga from './app/saga';

const sagas = [
  appSaga,
];

export default function* () {
  yield all(sagas.map(t => spawn(t)));
}
