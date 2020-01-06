import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { periods } from './constants';
import { AppState } from '../../store';
import { changeStarttime, changeDropdownValue } from '../actions';
import { convertDropdownValue } from './utils';
import { idGenerator } from '../../shared/utils';
import { DropdownListProps } from './models';

const DropdownList: FC<DropdownListProps> = ({
    dropdownValue,
    changeStarttime,
    changeDropdownValue
}: DropdownListProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prevState => (prevState ? false : true));
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
                {periods.map((period: string) => (
                    <DropdownItem
                        onClick={setDropdownValue}
                        key={idGenerator()}>
                        {period}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

const mapStateToProps = ({ state }: AppState) => ({
    dropdownValue: state.dropdownValue
});

const mapDispatchToProps = { changeStarttime, changeDropdownValue };

export default connect(mapStateToProps, mapDispatchToProps)(DropdownList);
