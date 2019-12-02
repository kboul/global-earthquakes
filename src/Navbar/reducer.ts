import {
    CHANGE_STARTTIME,
    CHANGE_ENDTIME,
    CHANGE_DROPDOWNVALUE
} from './types';

interface IEarthquakesReducer {
    starttime: string;
    endtime: string;
    dropdownValue: string;
}

const initialState: IEarthquakesReducer = {
    starttime: 'NOW - 3days',
    endtime: '',
    dropdownValue: '3 days'
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
        case CHANGE_DROPDOWNVALUE:
            return {
                ...state,
                dropdownValue: action.dropdownValue
            };
        default:
            return state;
    }
};
