import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1 justify-between">
        <img
          className="h-8"
          src="https://icon-library.com/images/hamburger-menu-icon/hamburger-menu-icon-16.jpg"
          alt="menu"
        />
        <img
          className="h-8"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10">
        <input type="text" />
        <button>Search</button>
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
