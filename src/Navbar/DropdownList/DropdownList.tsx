import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Container } from './styles';
import { RooState } from '../../store';
import { changeStartTime, changeNumOfDays } from '../actions';
import convertDropdownValue from './utils';
import { periods } from './constants';

export default function DropdownList() {
  const numOfDays = useSelector(({ navbar }: RooState) => navbar.numOfDays);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeDropdownIcon = () => {
    setDropdownOpen(prevState => (prevState ? false : true));
  };

  const selectNumOfDays = (e: React.MouseEvent<HTMLElement>): void => {
    const dropdownvalue = e.currentTarget.textContent;
    if (dropdownvalue) {
      dispatch(changeNumOfDays(dropdownvalue));
      dispatch(changeStartTime(convertDropdownValue(dropdownvalue)));
    }
  };

  return (
    <Container>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={changeDropdownIcon}
        direction={dropdownOpen ? 'up' : 'down'}>
        <DropdownToggle caret>{numOfDays}</DropdownToggle>
        <DropdownMenu>
          {periods.map(({ id, name }) => (
            <DropdownItem key={id} onClick={selectNumOfDays}>
              {name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </Container>
  );
}
