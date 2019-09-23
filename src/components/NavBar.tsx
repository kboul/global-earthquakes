import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import DropdownList from './DropdownList';
import NavBarForm from './NavBarForm';

const brandStyle = { color: '#ffffff' };

const NavBar: React.SFC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand style={brandStyle}>Earthquakes</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <DropdownList />
                        <NavBarForm />
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;
