import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import L, { LatLng, GeoJSON, Layer } from "leaflet";
import { useMap } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";

import PopupContent from "./PopupContent";
import { AppSpinner } from "../../ui/AppSpinner";
import { geojsonMarkerOptions } from "../utils";
import { getEarthquakes } from "../../../api/earthquakes";
import { FeatureProps } from "./models";
import { useStore } from "../../../hooks";

let geojson: GeoJSON;

export default function Earthquakes() {
  const map = useMap();

  const { numOfDays, startTime, endTime, selectedTab } = useStore(
    useShallow((state) => ({
      numOfDays: state.numOfDays,
      startTime: state.startTime,
      endTime: state.endTime,
      selectedTab: state.selectedTab
    }))
  );

  const { data: earthquakes, isLoading } = useQuery({
    queryKey: ["earthquakes", selectedTab, numOfDays, startTime, endTime],
    queryFn: () =>
      getEarthquakes({ selectedTab, numOfDays, startTime, endTime }),
    staleTime: 120000 // 2min
  });

  useEffect(() => {
    if (!earthquakes) return;

    if (map && geojson && map.hasLayer(geojson)) map.removeLayer(geojson);

    geojson = L.geoJSON(earthquakes.features, {
      onEachFeature: (feature: FeatureProps, layer: Layer) => {
        const {
          properties,
          geometry: { coordinates }
        } = feature;

        const popupContainer = document.createElement("div");

        createRoot(popupContainer).render(
          <PopupContent properties={properties} coordinates={coordinates} />
        );

        layer.bindPopup(popupContainer);
      },
      pointToLayer: (feature: FeatureProps, latlng: LatLng) => {
        const magnitude = feature.properties.mag;
        return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
      }
    });

    if (map) geojson.addTo(map);
  }, [earthquakes, map]);

  if (isLoading) return <AppSpinner size="large" />;

  return null;
}
