import { Outlet } from "react-router-dom";

import { AppNavbar } from "../components";

export default function Layout() {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
}
