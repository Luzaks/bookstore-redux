import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  manageBooks: booksReducer,
});

export default rootReducer;
