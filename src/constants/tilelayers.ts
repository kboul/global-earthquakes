const tilelayers = [
    {
        name: 'OpenStreetMap.BlackAndWhite',
        attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
        checked: false
    },
    {
        name: 'OpenStreetMap.Mapnik',
        attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        checked: true
    },
    {
        name: 'GoogleStreets',
        attribution: '&copy; Google',
        url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        checked: false
    },
    {
        name: 'GoogleSatellite',
        attribution: '&copy; Google',
        url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        checked: false
    }
];

export default tilelayers;
