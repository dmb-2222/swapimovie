import { combineReducers } from "redux";
import moviesListReducer from "./moviesList/moviesListReducers";

const rootReducer = combineReducers({
  listMovies: moviesListReducer
});

export default rootReducer;
