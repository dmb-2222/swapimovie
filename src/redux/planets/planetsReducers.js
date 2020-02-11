// import { combineReducers } from "redux";
import types from "../types";

export const planetsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.PLANETS_FETCH_SUCCESS:
      return payload;
    default:
      return state;
  }
};

// export default combineReducers({
//     planetsReducer
// });