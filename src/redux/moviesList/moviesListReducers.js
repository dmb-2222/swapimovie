import { combineReducers } from "redux";
import types from "../types";

const movies = (state = [], { type, payload }) => {
  switch (type) {
    case types.MOVIESLIST_FETCH_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.MOVIESLIST_FETCH_ERROR:
      return payload.error;
    default:
      return state;
  }
};

const isLoadingGetMoviesList = (state = false, { type }) => {
  switch (type) {
    case types.MOVIESLIST_FETCH_START:
      return true;
    case types.MOVIESLIST_FETCH_SUCCESS:
    case types.MOVIESLIST_FETCH_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  movies,
  error,
  isLoadingGetMoviesList
});
