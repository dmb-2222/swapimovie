import { combineReducers } from "redux";
import moviesListReducer from "./moviesList/moviesListReducers";
import {planetsReducer} from "./planets/planetsReducers";

const rootReducer = combineReducers({
  listMovies: moviesListReducer,
  planets: planetsReducer
});

export default rootReducer;
