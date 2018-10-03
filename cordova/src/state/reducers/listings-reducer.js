import { FETCH_LISTINGS } from '../actions/action-types';
import {REHYDRATE} from 'redux-persist'

const INITIAL_STATE = {
  listings: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LISTINGS.REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LISTINGS.SUCCESS:
      return {
        listings: action.payload,
        loading: false,
      };
    case FETCH_LISTINGS.ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
