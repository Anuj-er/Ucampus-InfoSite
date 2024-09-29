import React from "react";
import "./Loader.css"; // Link the CSS for styling
import loaderGif from './Loader.gif'; // Adjust the path to your GIF

const Loader = () => {
  return (
    <div id="loader">
      <div
        className="loader-gif"
        style={{ backgroundImage: `url(${loaderGif})` }} // Use inline style
      ></div>
    </div>
  );
};

export default Loader;