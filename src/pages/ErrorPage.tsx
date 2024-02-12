import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import { AppNavbar } from "../components";

export default function ErrorPage() {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error)
    ? "This page does not exist."
    : "An unexpected error occured.";

  return (
    <>
      <AppNavbar />
      <div className="p-5">
        <h1>Oops</h1>
        {errorText}
      </div>
    </>
  );
}
