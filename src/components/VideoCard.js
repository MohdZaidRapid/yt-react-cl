import React from "react";

const VideoCard = ({ info }) => {
  console.log(info?.snippet);
  const { snippet } = info ?? {};
  // const { channelTitle, title, thumbnails } = snippet;
  //   const { thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{snippet?.title}</li>
        <li>{snippet?.channelTitle}</li>
        <li>{info?.statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
