import { call, put, takeLatest } from 'redux-saga/effects';
import SpotahomeAPI from '../../api/spotahome-api';
import { FETCH_LISTINGS } from '../actions/action-types';

export function* fetchListings() {
  try {
    const listings = yield call(SpotahomeAPI.getListings);
    yield put({ type: FETCH_LISTINGS.SUCCESS, payload: listings.data.homecards });
  } catch (error) {
    yield put({ type: FETCH_LISTINGS.ERROR, error });
  }
}

export function* watchFetchListings() {
  yield takeLatest(FETCH_LISTINGS.REQUESTED, fetchListings);
}
