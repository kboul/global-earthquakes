import { magnitudeColors } from "./constants";

const circleMarkerColor = (magnitude: number): string => {
  if (magnitude <= 1) return magnitudeColors.xs;
  if (magnitude > 1 && magnitude <= 2) return magnitudeColors.sm;
  if (magnitude > 2 && magnitude <= 3) return magnitudeColors.md;
  if (magnitude > 3 && magnitude <= 5) return magnitudeColors.lg;
  if (magnitude > 5 && magnitude <= 7) return magnitudeColors.xl;
  return magnitudeColors.xxl;
};

const geojsonMarkerOptions = (magnitude: number) => ({
  radius: 2.5 * magnitude,
  fillColor: circleMarkerColor(magnitude),
  color: "grey",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.8
});

export { circleMarkerColor, geojsonMarkerOptions };
