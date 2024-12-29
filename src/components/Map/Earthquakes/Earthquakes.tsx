import { useEffect } from "react";
import L, { LatLng, GeoJSON } from "leaflet";
import { useMap } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";

import AppSpinner from "../../ui/AppSpinner";
import { onEachFeature } from "./utils";
import { geojsonMarkerOptions } from "../utils";
import { getEarthquakes } from "../../../api/earthquakes";
import { FeatureProps } from "./models";
import { useStore } from "../../../hooks";

let geojson: GeoJSON;

export default function Earthquakes() {
  const map = useMap();

  const startTime = useStore((state) => state.startTime);
  const endTime = useStore((state) => state.endTime);

  const { data: earthquakes, isLoading } = useQuery({
    queryKey: ["earthquakes", startTime, endTime],
    queryFn: () => getEarthquakes(startTime, endTime),
    staleTime: 120000 // 2min
  });

  useEffect(() => {
    if (!earthquakes) return;

    if (map && geojson && map.hasLayer(geojson)) map.removeLayer(geojson);

    geojson = L.geoJSON(earthquakes.features, {
      onEachFeature,
      pointToLayer: (feature: FeatureProps, latlng: LatLng) => {
        const magnitude = feature.properties.mag;
        return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
      }
    });

    if (map) geojson.addTo(map);
  }, [earthquakes, map]);

  if (isLoading) return <AppSpinner />;

  return null;
}
