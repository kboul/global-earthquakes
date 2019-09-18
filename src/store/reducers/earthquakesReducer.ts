import { CHANGE_STARTTIME, CHANGE_ENDTIME } from '../actions/types';

const initialState = {
    starttime: 'NOW - 3days',
    endtime: ''
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_STARTTIME:
            return {
                ...state,
                starttime: action.starttime,
                endtime: ''
            };
        case CHANGE_ENDTIME:
            return {
                ...state,
                endtime: action.endtime
            };
        default:
            return state;
    }
};
