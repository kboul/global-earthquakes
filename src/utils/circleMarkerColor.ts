export const circleMarkerColor = (magnitude: number): string => {
    return magnitude <= 1
        ? '#00b800'
        : magnitude > 1 && magnitude <= 2
        ? '#b6fe00'
        : magnitude > 2 && magnitude <= 3
        ? '#f6ff00'
        : magnitude > 3 && magnitude <= 5
        ? '#ffcf00'
        : magnitude > 5 && magnitude <= 7
        ? '#ff9000'
        : '#ff0000';
};
