// SearchHandler.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoYt } from "../utils/querySlice";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";

const SearchHandler = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleFetchYoutubeVideo = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`
    );
    const json = await data.json();
    dispatch(setVideoYt(json?.items));

    if (location.pathname === "/watch") {
      // Navigate to the / route after fetching the videos
      navigate("/");
    }
  };

  useEffect(() => {
    // API call over here
    // make an api call after every key press
    // but if the difference between 2 api call is <200ms;
    // decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * recocilation
   * key - i
   * - render the component
   * useEffect called
   * start time => make an api called 200 ms
   *
   *
   * key - ip
   * - destory the component(useEffect return method)
   * - call useEffect return method also
   * - rerender the component
   * - useEffect()
   * start time make an api called 200ms
   *
   *
   *
   *
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div>
      {/* Render the search input and suggestions */}
      <div>
        <input
          className="px-5 w-1/2 border  border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          onClick={handleFetchYoutubeVideo}
          className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
        >
          🔍
        </button>
        {showSuggestions && (
          <div className="fixed bg-white  py-2 px-2 w-[31.2rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchHandler;
