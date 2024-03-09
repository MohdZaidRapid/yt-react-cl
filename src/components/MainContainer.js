import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import SearchQueryVideo from "./SearchQueryVideo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const searchVideos = useSelector((store) => store.query.queryVideos);
  
  return (
    <div className="">
      <ButtonList />
      {searchVideos && searchVideos.length > 0 ? (
        <SearchQueryVideo />
      ) : (
        <VideoContainer />
      )}
    </div>
  );
};

export default MainContainer;
