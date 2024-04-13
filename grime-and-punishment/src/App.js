import router from "./Routes";
import { RouterProvider, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <SessionProvider>
        <RouterProvider router={router}>
          <Route>
            {({ children }) => (
              <Layout>
                {children}
                <SessionEditor />
                <SessionList />
                <QuestTracker />
                <QuestTrackerForm />
                <SelectedQuestDetails />
                <CampaignSummary />
                <About />
              </Layout>
            )}
          </Route>
        </RouterProvider>
      </SessionProvider>
    </>
  );
};

export default App;
