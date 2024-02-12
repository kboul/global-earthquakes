import { createRoot } from "react-dom/client";

import "leaflet/dist/leaflet.css";

import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
