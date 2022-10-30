const convertDropdownValue = (dropdownvalue: string): string => {
  const now = 'NOW - ';
  switch (dropdownvalue) {
    case '1 day':
      return `${now}1day`;
    case '3 days':
      return `${now}3days`;
    case '10 days':
      return `${now}10days`;
    case '20 days':
      return `${now}20days`;
    case '30 days':
      return `${now}30days`;
    default:
      return `${now}3days`;
  }
};

export default convertDropdownValue;
