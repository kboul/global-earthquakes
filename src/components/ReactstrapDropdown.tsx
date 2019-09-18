import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { periods } from '../constants/periods';
import { changeStarttime } from '../store/actions';
import { convertDropdownValue } from '../utils/convertDropdownValue';

export interface ReactstrapDropdownProps {
    changeStarttime: (arg1: string) => void;
}

const ReactstrapDropdown: React.SFC<ReactstrapDropdownProps> = ({
    changeStarttime
}) => {
    const [dropdownValue, setDropdownValue] = useState('Select period');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
    };

    const changeDropdownValue = (e: any) => {
        const dropdownvalue = e.currentTarget.textContent;
        setDropdownValue(dropdownvalue);
        changeStarttime(convertDropdownValue(dropdownvalue));
    };

    return (
        <Dropdown
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
            direction={dropdownOpen ? 'up' : 'down'}>
            <DropdownToggle caret>{dropdownValue}</DropdownToggle>
            <DropdownMenu>
                {periods.map((period: string, id: number) => (
                    <DropdownItem onClick={changeDropdownValue} key={id}>
                        {period}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

const mapDispatchToProps = { changeStarttime };

export default connect(
    null,
    mapDispatchToProps
)(ReactstrapDropdown);
