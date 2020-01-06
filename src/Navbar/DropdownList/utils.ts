export const convertDropdownValue = (dropdownvalue: string): string => {
    const query = 'NOW - ';
    switch (dropdownvalue) {
        case '1 day':
            return `${query}1day`;
        case '3 days':
            return `${query}3days`;
        case '10 days':
            return `${query}10days`;
        case '20 days':
            return `${query}20days`;
        case '30 days':
            return `${query}30days`;
        default:
            return 'NOW -3days';
    }
};
