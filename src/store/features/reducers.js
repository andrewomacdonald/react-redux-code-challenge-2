import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import showCompanies from './showCompanies/reducers';
import addEmployee from './AddEmployee/reducers';

const rootReducer = combineReducers({
  clickCounter,
  showCompanies,
  addEmployee,
});
export default rootReducer;
