import { spawn, all } from 'redux-saga/effects';
import { watchFetchListings } from './listings-saga';

function* rootSaga() {
  yield all([
    spawn(watchFetchListings)
  ]);
}

export default rootSaga;
