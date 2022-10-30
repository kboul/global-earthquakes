import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Container } from './styles';
import convertDropdownValue from './utils';
import { periods } from './constants';
import { changeState, types, useAppContext } from '../../../context';

export default function DropdownList() {
  const { state, dispatch } = useAppContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeDropdownIcon = () => {
    setDropdownOpen(prevState => (prevState ? false : true));
  };

  const selectNumOfDays = (e: React.MouseEvent<HTMLElement>): void => {
    const dropdownvalue = e.currentTarget.textContent;
    if (dropdownvalue) {
      dispatch(
        changeState(types.numOfDaysChanged, { numOfDays: dropdownvalue })
      );
      dispatch(
        changeState(types.startTimeChanged, {
          startTime: convertDropdownValue(dropdownvalue)
        })
      );
    }
  };

  return (
    <Container>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={changeDropdownIcon}
        direction={dropdownOpen ? 'up' : 'down'}>
        <DropdownToggle caret>{state.numOfDays}</DropdownToggle>
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
