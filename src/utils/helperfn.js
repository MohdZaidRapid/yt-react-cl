import { setVideoYt } from "./querySlice";

export const handleSearchYt = async (searchQuery, dispatch) => {
  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`
  );

  const json = await data.json();
  dispatch(setVideoYt(json?.items));
};
