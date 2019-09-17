import { CHANGE_STARTTIME, CHANGE_ENDTIME } from './types';

export const changeStarttime = (starttime: string) => ({
    type: CHANGE_STARTTIME,
    starttime
});

export const changeEndtime = (endtime: string) => ({
    type: CHANGE_ENDTIME,
    endtime
});
