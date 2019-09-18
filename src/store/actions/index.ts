import {
    CHANGE_STARTTIME,
    CHANGE_ENDTIME,
    CHANGE_DROPDOWNVALUE
} from './types';

export const changeStarttime = (starttime: string) => ({
    type: CHANGE_STARTTIME,
    starttime
});

export const changeEndtime = (endtime: string) => ({
    type: CHANGE_ENDTIME,
    endtime
});

export const changeDropdownValue = (dropdownValue: string) => ({
    type: CHANGE_DROPDOWNVALUE,
    dropdownValue
});
