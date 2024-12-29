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
      <h3 className="text-sm font-bold text-gray-800 mb-2">{title}</h3>
      <hr />

      <table className="w-full table-fixed border-collapse">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-2 font-semibold text-gray-700">Place</td>
            <td className="py-2 px-2 text-gray-700">{place ?? "Unknown"}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-2 font-semibold text-gray-700">
              Time (GMC+3)
            </td>
            <td className="py-2 px-2 text-gray-700">
              {timeConverter(time, 3)}
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-2 font-semibold text-gray-700">Latitude</td>
            <td className="py-2 px-2 text-gray-700">{coordinates[1]}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-2 font-semibold text-gray-700">Longitude</td>
            <td className="py-2 px-2 text-gray-700">{coordinates[0]}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-2 font-semibold text-gray-700">Depth</td>
            <td className="py-2 px-2 text-gray-700">{coordinates[2]} km</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-2 font-semibold text-gray-700">Magnitude</td>
            <td className="py-2 px-2 text-gray-700">
              <span
                className="text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                style={{ backgroundColor: circleMarkerColor(mag) }}>
                {mag} Richter
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-2 font-semibold text-gray-700">Details</td>
            <td className="py-2 px-2">
              <a
                href={url}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Read more
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
