import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landing/>,
    },
  ],
//   { basename: import.meta.env.DEV ? "/" : "/grime-and-punishment/" }
);

export default router;
