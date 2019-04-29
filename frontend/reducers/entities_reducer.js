import { combineReducers } from 'redux';
import homesReducer from './homes_reducer';

const entitiesReducer = combineReducers({
  homes: homesReducer,
});

export default entitiesReducer;