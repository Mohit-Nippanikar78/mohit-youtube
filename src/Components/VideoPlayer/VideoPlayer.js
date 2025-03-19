import React from "react";
import {  useParams } from "react-router";
import VideoPlayer1 from "react-video-js-player";

export default function VideoPlayer(props) {
  let { videoId } = useParams();

  return (
    <div>
      <VideoPlayer1
        src={props.activeVideo.url}
        width={window.screen.width}
        height={window.screen.height * 0.6}
      />
    </div>
  );
}
