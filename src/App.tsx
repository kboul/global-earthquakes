import { QueryClientProvider } from "@tanstack/react-query";

import { Map } from "./components";
import queryClient from "./queryClient";
import "./index.css";
import AppNavbar from "./components/AppNavbar";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavbar />
      {/* <Navbar /> */}
      <Map />
    </QueryClientProvider>
  );
}
