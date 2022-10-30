import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import L, { LatLng, GeoJSON } from 'leaflet';
import { useMap } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';

import Spinner from '../../Spinner';
import { RooState } from '../../../store';
import { onEachFeature } from './utils';
import { geojsonMarkerOptions } from '../utils';
import { getEarthquakes } from '../../../api/earthquakes';
import { FeatureProps } from './models';

let geojson: GeoJSON;

export default function Earthquakes() {
  const { startTime, endTime } = useSelector(({ navbar }: RooState) => navbar);
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
