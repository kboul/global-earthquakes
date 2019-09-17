import { CHANGE_QUERY } from '../actions/types';

const initialState = {
    query: 'NOW - 3days'
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
