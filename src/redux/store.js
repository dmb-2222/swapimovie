import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { budgetReducer, expenseReducer} from "./reducer";

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenseList: expenseReducer,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
