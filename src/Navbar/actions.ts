import types from './types';
import { IAction } from '../store/models';

const changeStartTime = (startTime: string): IAction => ({
  type: types.startTimeChanged,
  payload: {
    startTime
  }
});

const changeEndTime = (endTime: string): IAction => ({
  type: types.endTimeChanged,
  payload: {
    endTime
  }
});

const changeNumOfDays = (numOfDays: string): IAction => ({
  type: types.numOfDaysChanged,
  payload: {
    numOfDays
  }
});

export { changeStartTime, changeEndTime, changeNumOfDays };
