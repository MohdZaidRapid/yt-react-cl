import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        {" "}
        <Head />
        <Body />
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
