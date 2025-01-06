import { Badge } from "../../ui/Badge";
import { Table, TableBody, TableRow, TableCell } from "../../ui/Table";
import { circleMarkerColor } from "../utils";
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
  const { time, title, mag, place, url } = properties;
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

      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell>{place ?? "Unknown"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Time (GMC+3)</TableCell>
            <TableCell>{timeConverter(time, 3)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Latitude</TableCell>
            <TableCell>{coordinates[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Longitude</TableCell>
            <TableCell>{coordinates[0]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Depth</TableCell>
            <TableCell>{coordinates[2]} km</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Magnitude</TableCell>
            <TableCell>
              <Badge
                className="text-blue-800"
                style={{ backgroundColor: circleMarkerColor(mag) }}>
                {mag} Richter
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
