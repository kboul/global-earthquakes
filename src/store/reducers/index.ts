import { combineReducers } from 'redux';
import earthquakesReducer from './earthquakesReducer';

const rootReducer = combineReducers({
    earthquakes: earthquakesReducer
});

export default rootReducer;
