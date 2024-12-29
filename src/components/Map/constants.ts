const mapHeight = { height: "calc(100vh - 50px)" };

const tileLayers = [
  {
    id: 1,
    name: "CartoDB.Positron",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    checked: false
  },
  {
    id: 2,
    name: "OpenStreetMap.Mapnik",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    checked: true
  },
  {
    id: 3,
    name: "GoogleStreets",
    attribution: "&copy; Google",
    url: "http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    checked: false
  },
  {
    id: 4,
    name: "GoogleSatellite",
    attribution: "&copy; Google",
    url: "http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    checked: false
  }
];

const tectonicPlatesStyle = {
  color: "orange",
  weight: 2
};

const magnitudeColors = {
  xs: "#00b800",
  sm: "#b6fe00",
  md: "#f6ff00",
  lg: "#ffcf00",
  xl: "#ff9000",
  xxl: "#ff0000"
};

export { magnitudeColors, mapHeight, tileLayers, tectonicPlatesStyle };
