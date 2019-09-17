import { CHANGE_QUERY } from '../actions/types';

const initialState = {
    query: 'NOW - 10hours'
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.query
            };
        default:
            return state;
    }
};
