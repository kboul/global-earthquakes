import { useEffect } from 'react';
import L, { LatLng, GeoJSON } from 'leaflet';
import { useMap } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';

import Spinner from '../../Spinner';
import { onEachFeature } from './utils';
import { geojsonMarkerOptions } from '../utils';
import { getEarthquakes } from '../../../api/earthquakes';
import { FeatureProps } from './models';
import { useAppContext } from '../../../context';

let geojson: GeoJSON;

export default function Earthquakes() {
  const { state } = useAppContext();
  const { startTime, endTime } = state;

  const { data: earthquakes, isLoading } = useQuery(
    ['earthquakes', startTime, endTime],
    () => getEarthquakes(startTime, endTime)
  );

  const map = useMap();
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

  if (isLoading) return <Spinner />;

  return null;
}
