import { useMemo } from "react";

import { AppBadge } from "../../ui/AppBadge";
import { AppTwoColumnTable } from "../../ui/AppTable";
import { getCircleMarkerColor } from "../utils";
import { useStore } from "../../../hooks";
import { FeatureProps } from "./models";

// Convert Epoch time to human readable with specific timezone
const timeConverter = (time: number, offset: number): string => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000; // This converts to UTC 00:00
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};

type PopupContentProps = {
  properties: FeatureProps["properties"];
  coordinates: number[];
};

export default function PopupContent({
  properties,
  coordinates
}: PopupContentProps) {
  const magnitudePalette = useStore((state) => state.magnitudePalette);

  const { time, title, mag, place, url } = properties;

  const data = useMemo(
    () => [
      {
        id: "place",
        firstColumn: "Place",
        secondColumn: place ?? "Unknown"
      },
      {
        id: "time",
        firstColumn: "Time (GMC+3)",
        secondColumn: timeConverter(time, 3)
      },
      { id: "lat", firstColumn: "Latitude", secondColumn: coordinates[1] },
      { id: "lon", firstColumn: "Longitude", secondColumn: coordinates[0] },
      {
        id: "depth",
        firstColumn: "Depth",
        secondColumn: `${coordinates[2]} km`
      },
      {
        id: "magnitude",
        firstColumn: "Magnitude",
        secondColumn: (
          <AppBadge
            className="text-blue-800"
            style={{
              backgroundColor: getCircleMarkerColor(mag, magnitudePalette)
            }}>
            {mag} Richter
          </AppBadge>
        )
      }
    ],
    [place, time, coordinates, mag]
  );

  return (
    <div>
      <h2 className="text-sm font-bold text-gray-800 mb-2">
        <a
          href={url}
          target="_blank"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          {title}
        </a>
      </h2>
      <hr />

      <AppTwoColumnTable data={data} />
    </div>
  );
}
