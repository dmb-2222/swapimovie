import types from '../types';

export const planetsFetchStart = () => ({
  type: types.PLANETS_FETCH_START,
});
export const planetsListFetchSuccess = response => ({
  type: types.PLANETS_FETCH_SUCCESS,
  payload: response,
});
export const planetsListFetchFetchError = error => ({
  type: types.PLANETS_FETCH_ERROR,
  payload: { error },
});