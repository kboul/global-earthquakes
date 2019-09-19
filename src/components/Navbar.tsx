import React, { SFC, useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import ReactstrapDropdown from './ReactstrapDropdown';
import {
    changeStarttime,
    changeEndtime,
    changeDropdownValue
} from '../store/actions';
import InfoTip from './Infotip';

export interface NavbarProps {
    changeStarttime: (arg1: string) => void;
    changeEndtime: (arg1: string) => void;
    changeDropdownValue: (arg1: string) => void;
}

const Navbar: SFC<NavbarProps> = ({
    changeStarttime,
    changeEndtime,
    changeDropdownValue
}) => {
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [starttimeTooltipOpen, setStarttimeTooltipOpen] = useState(false);
    const [endtimeTooltipOpen, setEndtimeTooltipOpen] = useState(false);

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
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="navbar-brand mr-auto mr-lg-0">Earthquakes</div>
            <button
                className="navbar-toggler p-0 border-0"
                type="button"
                data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse">
                <ul className="navbar-nav ml-auto mr-2">
                    <ReactstrapDropdown />
                </ul>

                <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        id="starttime"
                        type="text"
                        placeholder="Start time"
                        aria-label="Search"
                        value={starttime}
                        onChange={e => setStarttime(e.target.value)}
                    />
                    <InfoTip
                        target={'starttime'}
                        tooltipOpen={starttimeTooltipOpen}
                        setTooltipOpen={setStarttimeTooltipOpen}
                    />
                    <input
                        className="form-control mr-sm-2"
                        id="endtime"
                        type="text"
                        placeholder="End time"
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
            </div>
        </nav>
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
)(Navbar);
