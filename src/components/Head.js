import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // API call over here
    // make an api call after every key press
    // but if the difference between 2 api call is <200ms;
    // decline api call
    const timer = setTimeout(() => {
      getSearchSuggestions();
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
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://icon-library.com/images/hamburger-menu-icon/hamburger-menu-icon-16.jpg"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border  border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        <div className="fixed bg-white  py-2 px-2 w-[31.2rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
              🔍 Iphone Pro
            </li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
              🔍 Iphone Pro max
            </li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
              🔍 Iphone Pro max 14
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
