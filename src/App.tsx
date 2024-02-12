import { QueryClientProvider } from "@tanstack/react-query";

import { AppNavbar, Map } from "./components";
import queryClient from "./queryClient";
import "./index.css";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavbar />
      <Map />
    </QueryClientProvider>
  );
}
