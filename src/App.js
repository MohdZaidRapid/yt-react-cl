import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchQuery from "./components/SearchQuery";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "query/:searchQuery",
        element: <SearchQuery />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        {" "}
        <RouterProvider router={appRouter} />
        {/*
         *
         *  Header
         *  Body
         *    * sidebar
         *    * Menu items
         *     * ButtonList
         *     * VideoContainer
         *     * VideoCard
         */}
      </Provider>
    </div>
  );
}

export default App;
