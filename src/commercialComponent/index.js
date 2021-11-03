import React from "react";
import "./style.css";
import ReactPlayer from "react-player";
import VideoComponent from "../videoComponent";

function CommercialComponent() {
  return (
    <div>
      <VideoComponent url="videos/Personal_Commercial_SparkVideo.mp4" />
    </div>
  );
}

export default CommercialComponent;
