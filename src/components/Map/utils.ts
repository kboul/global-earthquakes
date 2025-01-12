import { defaultMagnitudePalette } from "../../constants";

const circleMarkerColor = (magnitude: number): string => {
  if (magnitude <= 1) return defaultMagnitudePalette.xs;
  if (magnitude > 1 && magnitude <= 2) return defaultMagnitudePalette.sm;
  if (magnitude > 2 && magnitude <= 3) return defaultMagnitudePalette.md;
  if (magnitude > 3 && magnitude <= 5) return defaultMagnitudePalette.lg;
  if (magnitude > 5 && magnitude <= 7) return defaultMagnitudePalette.xl;
  return defaultMagnitudePalette.xxl;
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
