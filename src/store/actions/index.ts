import { CHANGE_QUERY } from './types';

export const changeQuery = (query: string) => ({
    type: CHANGE_QUERY,
    query
});
