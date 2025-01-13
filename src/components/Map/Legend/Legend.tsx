import { useEffect } from "react";
import { Control, DomUtil } from "leaflet";
import { useMap } from "react-leaflet";

import { useStore } from "../../../hooks";
import { getCircleMarkerColor } from "../utils";
import { cn } from "../../../utils";
import "./index.css";

export default function Legend() {
  const map = useMap();
  const magnitudePalette = useStore((state) => state.magnitudePalette);

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
            <i class="w-5 h-5 inline-block rounded" style="background: ${getCircleMarkerColor(from + 1, magnitudePalette)};"></i>
            <span>${from}${to ? `&ndash;${to}` : "+"}</span>
          </div>
        `;
      });

      div.innerHTML = `
        ${labels.join("")}
      `;

      return div;
    };

    legend.addTo(map);

    return () => {
      map.removeControl(legend);
    };
  }, [map, magnitudePalette]);

  return null;
}
