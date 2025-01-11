import { useEffect } from "react";
import { Control, DomUtil } from "leaflet";
import { useMap } from "react-leaflet";

import { circleMarkerColor } from "../utils";
import { cn } from "../../../utils";
import "./index.css";

export default function Legend() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const legend = new Control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = DomUtil.create("div", "info legend");
      div.className = cn(
        "p-4",
        "bg-white",
        "rounded-lg",
        "shadow-md",
        "space-y-2",
        "text-sm",
        "text-gray-700"
      );

      const grades = [0, 1, 2, 3, 5, 7];
      const labels = grades.map((from, index) => {
        const to = grades[index + 1];
        return `
          <div class="flex items-center space-x-2">
            <i style="background: ${circleMarkerColor(from + 1)}; width: 20px; height: 20px; display: inline-block; border-radius: 4px;"></i>
            <span>${from}${to ? `&ndash;${to}` : "+"}</span>
          </div>
        `;
      });

      div.innerHTML = `
        <h4 class="font-bold">Magnitude</h4>
        ${labels.join("")}
      `;

      return div;
    };

    legend.addTo(map);

    return () => {
      map.removeControl(legend);
    };
  }, [map]);

  return null;
}
