import { combineReducers } from 'redux';
import navbarReducer from '../Navbar/reducer';

const rootReducer = combineReducers({
  navbar: navbarReducer
});

export default rootReducer;
