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
      <h3 style={{ fontSize: "1.17em", fontWeight: "bold" }}>{title}</h3>
      <b>Place</b>: {place ?? "Unknown"} <br />
      <b>Time (GMC+3)</b>: {timeConverter(time, 3)} <br />
      <b>Lat</b>: {coordinates[1]} <br />
      <b>Lon</b>: {coordinates[0]} <br />
      <b>Depth</b>: {coordinates[2]} km <br />
      <b>Magnitude</b>: {mag} Richter <br />
      <b>Details</b>: <a href={url}>click here to see more details</a>
    </div>
  );
}
