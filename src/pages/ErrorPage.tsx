import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

export default function ErrorPage() {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error)
    ? "This page does not exist."
    : "An unexpected error occured.";

  return (
    <>
      <Navbar />
      <div className="p-5">
        <h1>Oops</h1>
        {errorText}
      </div>
    </>
  );
}
