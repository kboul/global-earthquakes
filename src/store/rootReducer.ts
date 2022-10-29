import { combineReducers } from 'redux';
import navbarReducer from '../components/Navbar/reducer';

const rootReducer = combineReducers({
  navbar: navbarReducer
});

export default rootReducer;
