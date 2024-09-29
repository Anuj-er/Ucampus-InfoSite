import React from "react";
import "./Loader.css"; // Make sure this file exists for additional styling
import loaderGif from './Loader.gif'; // Import your loader GIF

const Loader = () => {
  return (
    <div id="loader">
      <img src={loaderGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;