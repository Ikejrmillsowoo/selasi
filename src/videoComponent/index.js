import React from "react";
import "./style.css";
import ReactPlayer from "react-player";

function VideoComponent(props) {
  return (
    <div className="video">
      <ReactPlayer
        playing={true}
        url={props.url}
        height="auto"
        width="100%"
        controls={false}
        muted={true}
        loop={true}
        playsinline={true}
      />
    </div>
  );
}

export default VideoComponent;
