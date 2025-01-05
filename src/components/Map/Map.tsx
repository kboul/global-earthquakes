import { MapContainer, TileLayer, GeoJSON, ScaleControl } from "react-leaflet";

import Earthquakes from "./Earthquakes";
import Legend from "./Legend";
import tectonicPlates from "./PB2002_boundaries.json";
import { useStore } from "../../hooks";
import { mapHeight, tectonicPlatesStyle } from "./constants";
import { tileLayers } from "../../constants";

export function Map() {
  const tectonicPlatesOn = useStore((state) => state.tectonicPlatesOn);
  const selectedTileLayer = useStore((state) => state.selectedTileLayer);

  const layer = tileLayers.find((layer) => layer.name === selectedTileLayer);

  return (
    <MapContainer center={[0, 0]} zoom={3} style={mapHeight}>
      {layer && <TileLayer attribution={layer.attribution} url={layer.url} />}

      {tectonicPlatesOn && (
        <GeoJSON
          data={tectonicPlates as GeoJSON.GeoJsonObject}
          style={tectonicPlatesStyle}
        />
      )}

      <Earthquakes />
      <ScaleControl />
      <Legend />
    </MapContainer>
  );
}
