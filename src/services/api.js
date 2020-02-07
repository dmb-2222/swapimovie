import axios from "axios";

export const getMovies = (query = "A") => {
  return axios
    .get(`https://swapi.co/api/films/?search=${query}`)
    .then(data => data.data.results);
};

export const getInfo = (query = 0) => {
  return axios.get(`${query}`).then(data => data.data);
};