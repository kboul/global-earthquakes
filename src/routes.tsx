import { createBrowserRouter } from "react-router-dom";

import { HomePage, ErrorPage, Layout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }]
  }
]);

export default router;
