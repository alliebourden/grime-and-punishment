import router from "./Routes";
import { RouterProvider, Route } from "react-router-dom";
import Landing from "./pages/Landing";


const App = () => {
  return (
    <>
        <RouterProvider router={router}>
          <Route>
                <Landing />
          </Route>
        </RouterProvider>
    </>
  );
};

export default App;
