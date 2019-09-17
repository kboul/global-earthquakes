import { CHANGE_STARTTIME } from './types';

export const changeStarttime = (starttime: string) => ({
    type: CHANGE_STARTTIME,
    starttime
});
