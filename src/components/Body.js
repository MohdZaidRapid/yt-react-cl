import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
        {/* <MainContainer />
      <WatchPage /> */}
      </div>
    </>
  );
};

export default Body;
