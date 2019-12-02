import { combineReducers } from 'redux';
import navbarReducer from './Navbar/navbarReducer';

const rootReducer = combineReducers({
    state: navbarReducer
});

export default rootReducer;
