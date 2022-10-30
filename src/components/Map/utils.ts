const circleMarkerColor = (magnitude: number): string => {
  if (magnitude <= 1) return '#00b800';
  if (magnitude > 1 && magnitude <= 2) return '#b6fe00';
  if (magnitude > 2 && magnitude <= 3) return '#f6ff00';
  if (magnitude > 3 && magnitude <= 5) return '#ffcf00';
  if (magnitude > 5 && magnitude <= 7) return '#ff9000';
  return '#ff0000';
};

const geojsonMarkerOptions = (magnitude: number): Object => ({
  radius: 2.5 * magnitude,
  fillColor: circleMarkerColor(magnitude),
  color: 'grey',
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.8
});

export { circleMarkerColor, geojsonMarkerOptions };
