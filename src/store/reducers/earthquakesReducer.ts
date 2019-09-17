import { CHANGE_STARTTIME } from '../actions/types';

const initialState = {
    starttime: 'NOW - 3days'
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_STARTTIME:
            return {
                ...state,
                starttime: action.starttime
            };
        default:
            return state;
    }
};
