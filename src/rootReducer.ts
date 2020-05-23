import { combineReducers } from 'redux';
import navbarReducer from './Navbar/reducer';

const rootReducer = combineReducers({
    state: navbarReducer
});

export default rootReducer;
