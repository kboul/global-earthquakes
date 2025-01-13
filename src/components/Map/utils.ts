import { colorPalettes, defaultPalette } from "../../constants";

const getCircleMarkerColor = (
  magnitude: number,
  magnitudePalette: string
): string => {
  // @ts-ignore
  const palette = colorPalettes[magnitudePalette] ?? defaultPalette;
  if (magnitude <= 1) return palette.xs;
  if (magnitude > 1 && magnitude <= 2) return palette.sm;
  if (magnitude > 2 && magnitude <= 3) return palette.md;
  if (magnitude > 3 && magnitude <= 5) return palette.lg;
  if (magnitude > 5 && magnitude <= 7) return palette.xl;
  return palette.xxl;
};

const geojsonMarkerOptions = (magnitude: number, magnitudePalette: string) => ({
  radius: 2.5 * magnitude,
  fillColor: getCircleMarkerColor(magnitude, magnitudePalette),
  color: "grey",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 0.8
});

export { getCircleMarkerColor, geojsonMarkerOptions };
