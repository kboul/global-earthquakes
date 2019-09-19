import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { periods } from '../constants/periods';
import { changeStarttime, changeDropdownValue } from '../store/actions';
import { convertDropdownValue } from '../utils/convertDropdownValue';

export interface ReactstrapDropdownProps {
    dropdownValue: string;
    changeStarttime: (arg1: string) => void;
    changeDropdownValue: (arg1: string) => void;
}

const ReactstrapDropdown: FC<ReactstrapDropdownProps> = ({
    dropdownValue,
    changeStarttime,
    changeDropdownValue
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
    };

    const setDropdownValue = (e: any): void => {
        const dropdownvalue = e.currentTarget.textContent;
        changeDropdownValue(dropdownvalue);
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
                    <DropdownItem onClick={setDropdownValue} key={id}>
                        {period}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

const mapStateToProps = (state: any) => ({
    dropdownValue: state.earthquakes.dropdownValue
});

const mapDispatchToProps = { changeStarttime, changeDropdownValue };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactstrapDropdown);
