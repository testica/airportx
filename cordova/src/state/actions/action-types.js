const createAsyncActionType = type => {
  return {
    REQUESTED: `${type}_REQUESTED`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
  };
};
export const FETCH_LISTINGS = createAsyncActionType('fetch_feed');
