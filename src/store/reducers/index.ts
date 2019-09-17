import { combineReducers } from 'redux';
import earthquakesReducer from './earthquakesReducer';

const reducers = combineReducers({
    earthquakes: earthquakesReducer
});

export default reducers;
