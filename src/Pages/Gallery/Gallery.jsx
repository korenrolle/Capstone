import React, { useState, useRef } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { Line } from "rc-progress";

function Gallery() {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const handleClick = (event) => {
    setUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleProgress = ({ played, playedSeconds }) => {
    setProgress(played);
  };

  return (
    <div className="App">
      <input type="file" accept="audio/*" onChange={handleClick} />
      <ReactPlayer
        ref={playerRef}
        url={url}
        onProgress={handleProgress}
        width="0"
        height="0"
      />
      {url ? (
        <Line
          percent={progress * 100}
          strokeWidth="1"
          strokeColor="#2db7f5"
          trailWidth="1"
          trailColor="#d9d9d9"
        />
      ) : null}
    </div>
  );
}

export default Gallery;

