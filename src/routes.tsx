import { createHashRouter } from "react-router-dom";

import { HomePage, ErrorPage, Layout } from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }]
  }
]);

export default router;
