import { Type } from './expenseAction';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_EXPENSE:
      return [...state, payload];

    case Type.REMOVE_EXPENSE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default expensesReducer;
