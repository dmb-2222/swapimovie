import types from '../types';

export const moviesListFetchStart = () => ({
  type: types.MOVIESLIST_FETCH_START,
});
export const moviesListFetchSuccess = response => ({
  type: types.MOVIESLIST_FETCH_SUCCESS,
  payload: response,
});
export const moviesListFetchFetchError = error => ({
  type: types.MOVIESLIST_FETCH_ERROR,
  payload: { error },
});