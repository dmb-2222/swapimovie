import axios from "axios";

import {
  moviesListFetchStart,
  moviesListFetchSuccess,
  moviesListFetchFetchError
} from "./moviesListActions";

// axios.baseURL = "https://";

export const getMoviesListFetch = (query = "A") => dispatch => {
  dispatch(moviesListFetchStart());
  return axios
  .get(`https://swapi.co/api/films/?search=${query}`)
    .then(data => {
      dispatch(moviesListFetchSuccess(data.data.results));
    })
    .catch(error => moviesListFetchFetchError(error));
};
