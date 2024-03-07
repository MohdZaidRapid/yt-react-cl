import React from "react";

const SearchVideoCard = ({ info }) => {
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
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <SearchVideoCard info={info} />
    </div>
  );
};

export default SearchVideoCard;
