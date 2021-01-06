import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import InfoTip from './Infotip';
import { changeStartTime, changeEndTime, changeNumOfDays } from '../actions';
import styles from './index.module.sass';

export default function NavBarForm() {
    const dispatch = useDispatch();
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startTimeTooltipOpen, setStartTimeTooltipOpen] = useState(false);
    const [endTimeTooltipOpen, setEndTimeTooltipOpen] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // clear dropdown default value
        dispatch(changeNumOfDays('Select Period'));
        // pass the query params to be able to perform query
        dispatch(changeStartTime(startTime));
        dispatch(changeEndTime(endTime));
        // clear start end input values
        setStartTime('');
        setEndTime('');
    };

    const changeIcon = (): void => setToggleIcon(!toggleIcon);

    const onStartTimeChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setStartTime(e.target.value);
    };

    const onEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEndTime(e.target.value);
    };

    return (
        <form
            className={`form-inline my-lg-0 ${styles.form}`}
            onSubmit={onSubmit}>
            <div className={`input-group ${styles.startTime}`}>
                <input
                    className="form-control"
                    id="startTime"
                    type={toggleIcon ? 'text' : 'date'}
                    aria-label="Search"
                    value={startTime}
                    onChange={onStartTimeChange}
                />
                <div className="input-group-append mr-sm-2">
                    <span className="input-group-text">
                        <i
                            className={`${styles.fa} fa fa-${
                                toggleIcon ? 'calendar' : 'pencil'
                            }`}
                            tabIndex={0}
                            aria-label="Mute volume"
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
            <input
                className="form-control mr-sm-2"
                id="endTime"
                type="date"
                disabled={toggleIcon ? true : false}
                aria-label="Search"
                value={endTime}
                onChange={onEndTimeChange}
            />
            <InfoTip
                target="endTime"
                tooltipOpen={endTimeTooltipOpen}
                setTooltipOpen={setEndTimeTooltipOpen}
            />
            <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
            </button>
        </form>
    );
}
