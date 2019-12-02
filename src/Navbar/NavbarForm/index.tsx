import React, { SFC, useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import InfoTip from './Infotip';
import {
    changeStarttime,
    changeEndtime,
    changeDropdownValue
} from '../actions';
import styles from './index.module.css';

export interface NavBarFormProps {
    changeStarttime: (starttime: string) => void;
    changeEndtime: (endtime: string) => void;
    changeDropdownValue: (dropdownValue: string) => void;
}

const NavBarForm: SFC<NavBarFormProps> = ({
    changeStarttime,
    changeEndtime,
    changeDropdownValue
}) => {
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [starttimeTooltipOpen, setStarttimeTooltipOpen] = useState(false);
    const [endtimeTooltipOpen, setEndtimeTooltipOpen] = useState(false);
    const [toggleFontAwesome, setToggleFontAwesome] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        // clear dropdown default value
        changeDropdownValue('Select Period');
        // pass the query params to be able to perform query
        changeStarttime(starttime);
        changeEndtime(endtime);
        // clear start end input values
        setStarttime('');
        setEndtime('');
        e.preventDefault();
    };

    return (
        <form
            className={`form-inline my-lg-0 ${styles.form}`}
            onSubmit={onSubmit}>
            <div className={`input-group ${styles.starttime}`}>
                <input
                    className="form-control"
                    id="starttime"
                    type={toggleFontAwesome ? 'text' : 'date'}
                    aria-label="Search"
                    value={starttime}
                    onChange={e => setStarttime(e.target.value)}
                />
                <div className="input-group-append mr-sm-2">
                    <span className="input-group-text">
                        <i
                            className={`fa fa-${
                                toggleFontAwesome ? 'calendar' : 'pencil'
                            }`}
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                setToggleFontAwesome(!toggleFontAwesome)
                            }></i>
                    </span>
                </div>
            </div>
            <InfoTip
                target={'starttime'}
                tooltipOpen={starttimeTooltipOpen}
                setTooltipOpen={setStarttimeTooltipOpen}
            />
            <input
                className="form-control mr-sm-2"
                id="endtime"
                type="date"
                disabled={toggleFontAwesome ? true : false}
                aria-label="Search"
                value={endtime}
                onChange={e => setEndtime(e.target.value)}
            />
            <InfoTip
                target={'endtime'}
                tooltipOpen={endtimeTooltipOpen}
                setTooltipOpen={setEndtimeTooltipOpen}
            />
            <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
            </button>
        </form>
    );
};

const mapDispatchToProps = {
    changeStarttime,
    changeEndtime,
    changeDropdownValue
};

export default connect(
    null,
    mapDispatchToProps
)(NavBarForm);
