import React, { ReactElement } from 'react';
import DropdownList from './DropdownList';

export interface NavbarProps {
    children: ReactElement;
}

const Navbar: React.SFC<NavbarProps> = ({ children }) => {
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
                    <DropdownList />
                </ul>

                {children}
            </div>
        </nav>
    );
};

export default Navbar;
