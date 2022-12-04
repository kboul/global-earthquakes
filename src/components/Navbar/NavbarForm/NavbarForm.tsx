import { useState, FormEvent, ChangeEvent } from 'react';

import { EndTimeInput, Icon } from './styles';
import InfoTip from './Infotip';
import { useStore } from '../../../hooks';

export default function NavBarForm() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const setNumOfDays = useStore((state) => state.setNumOfDays);
  const setGlobalStartTime = useStore((state) => state.setStartTime);
  const setGlobalEndTime = useStore((state) => state.setEndTime);

  const [startTimeTooltipOpen, setStartTimeTooltipOpen] = useState(false);
  const [endTimeTooltipOpen, setEndTimeTooltipOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // clear dropdown default value
    setNumOfDays('Select Period');
    // pass the query params to be able to perform query
    setGlobalStartTime(startTime);
    setGlobalEndTime(endTime);
    // clear start end input values
    setStartTime('');
    setEndTime('');
  };

  const changeIcon = () => setToggleIcon(!toggleIcon);

  const handleStartTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  return (
    <form className="form-inline my-lg-0" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          id="startTime"
          type={toggleIcon ? 'text' : 'date'}
          value={startTime}
          onChange={handleStartTimeChange}
        />
        <div className="input-group-append mr-sm-2">
          <span className="input-group-text">
            <Icon
              className={`fa fa-${toggleIcon ? 'calendar' : 'pencil'}`}
              tabIndex={0}
              role="button"
              onClick={changeIcon}
              onKeyDown={() => {}}
            />
          </span>
        </div>
      </div>
      <InfoTip
        target="startTime"
        tooltipOpen={startTimeTooltipOpen}
        setTooltipOpen={setStartTimeTooltipOpen}
      />
      <EndTimeInput
        className="form-control mr-sm-2"
        id="endTime"
        type="date"
        disabled={toggleIcon ? true : false}
        value={endTime}
        onChange={handleEndTimeChange}
      />
      <InfoTip
        target="endTime"
        tooltipOpen={endTimeTooltipOpen}
        setTooltipOpen={setEndTimeTooltipOpen}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}
