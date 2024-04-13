import router from "./Routes";
import { RouterProvider, Route } from "react-router-dom";
import Landing from "./src/pages/Landing";


const App = () => {
  return (
    <>
      <SessionProvider>
        <RouterProvider router={router}>
          <Route>
            {({ children }) => (
                <Landing />
            )}
          </Route>
        </RouterProvider>
      </SessionProvider>
    </>
  );
};

export default App;
