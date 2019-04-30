import { combineReducers } from 'redux';
import homesReducer from './homes_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  homes: homesReducer,
  search: searchReducer,
});

export default entitiesReducer;