import axios from "axios";

import {
  planetsFetchStart,
  planetsListFetchSuccess,
  planetsListFetchFetchError
} from "./planetsActions";


export const getInfoPlanetShipsFetch = (query) => dispatch => {
    dispatch(planetsFetchStart());
    return axios
    .get(`${query}`)
      .then(data => {
        dispatch(planetsListFetchSuccess(data.data));
      })
      .catch(error => planetsListFetchFetchError(error));
  };

//   export const getInfo = (query = 0) => {
//     return axios.
//     get(`${query}`).then(data => data.data)
//     .catch(error => planetsListFetchFetchError(error));;
//   };