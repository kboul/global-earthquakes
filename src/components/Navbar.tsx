import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactstrapDropdown from './ReactstrapDropdown';
import { changeStarttime, changeEndtime } from '../store/actions';

export interface NavbarProps {
    changeStarttime: (arg1: string) => void;
    changeEndtime: (arg1: string) => void;
}

const Navbar: React.SFC<NavbarProps> = ({ changeStarttime, changeEndtime }) => {
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const indicator = starttime === '' ? <small>(last 3 days)</small> : '';

    const onSubmit = (e: any) => {
        changeStarttime(starttime);
        changeEndtime(endtime);
        setStarttime('');
        setEndtime('');
        e.preventDefault();
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="navbar-brand mr-auto mr-lg-0">
                Earthquakes {indicator}
            </div>
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
                        type="text"
                        placeholder="Start time"
                        aria-label="Search"
                        value={starttime}
                        onChange={e => setStarttime(e.target.value)}
                    />
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="End time"
                        aria-label="Search"
                        value={endtime}
                        onChange={e => setEndtime(e.target.value)}
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

const mapDispatchToProps = { changeStarttime, changeEndtime };

export default connect(
    null,
    mapDispatchToProps
)(Navbar);
