export const circleMarkerColor = (magnitude: number) => {
    return magnitude <= 1
        ? '#fcfcfc'
        : magnitude > 1 && magnitude <= 3
        ? '#a5d1fd'
        : magnitude > 3 && magnitude <= 4
        ? '#00ff91'
        : magnitude > 4 && magnitude <= 7
        ? '#ffc800'
        : '#010101';
};
