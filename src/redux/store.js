import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import budgetReducer from './budget/budgetReducer';
import expenseReducer from './expense/expenseReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});

const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
