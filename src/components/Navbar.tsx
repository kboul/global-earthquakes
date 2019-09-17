import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeStarttime } from '../store/actions';

export interface NavbarProps {
    changeStarttime: (arg1: any) => void;
}

const Navbar: React.SFC<NavbarProps> = ({ changeStarttime }) => {
    const [starttime, setstarttime] = useState('');
    const indicator = starttime === '' ? <small>(last 3 days)</small> : '';

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
                <ul className="navbar-nav mr-auto mt-1"></ul>
                <form
                    className="form-inline my-2 my-lg-0"
                    onSubmit={e => {
                        changeStarttime(starttime);
                        e.preventDefault();
                    }}>
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Start time"
                        aria-label="Search"
                        value={starttime}
                        onChange={e => setstarttime(e.target.value)}
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

const mapDispatchToProps = { changeStarttime };

export default connect(
    null,
    mapDispatchToProps
)(Navbar);
