import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchVideoCard from "./SearchVideoCard";

const SearchQueryVideo = () => {
  const queryVideos = useSelector((store) => store.query.queryVideos);

  return (
    <div className="flex flex-wrap">
      {queryVideos && queryVideos[0] && <AdVideoCard info={queryVideos[0]} />}
      {queryVideos?.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <SearchVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchQueryVideo;
