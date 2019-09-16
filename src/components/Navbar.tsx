import * as React from 'react';

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <a className="navbar-brand mr-auto mr-lg-0" href="#">
                Earthquakes
            </a>
            <button
                className="navbar-toggler p-0 border-0"
                type="button"
                data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="navbar-collapse offcanvas-collapse"
                id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto mt-1">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdown01"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Settings
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="dropdown01">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
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

export default Navbar;
