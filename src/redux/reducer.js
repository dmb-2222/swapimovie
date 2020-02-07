import { Type } from "./action";

export const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_BUDGET:
      return state + action.payload;
    default:
      return state;
  }
};

export const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case Type.ADD_EXPENSE:
      return [action.payload, ...state];
    case Type.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};
