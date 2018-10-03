import { combineReducers } from 'redux';
import listings from './reducers/listings-reducer';

export default function getRootReducer(navReducer) {
  return combineReducers({
      listings
  });
}