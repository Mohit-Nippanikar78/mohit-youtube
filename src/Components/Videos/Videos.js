import React from "react";
import "./Videos.css";
import Filters from "../Filters/Filters";

import VideoItem from "./VideoItem/VideoItem";

export default function Videos(props) {
  return (
    <>
      <Filters
        btnAnimation={props.btnAnimation}
        homeVideos={props.homeVideos}
        showHomeVideos={props.showHomeVideos}
        setShowHomeVideos={props.setShowHomeVideos}
        filterbtns={props.filterbtns}
      />
      <div className="home-videos-container">
        {props.showHomeVideos.map((param) => {
          return (
            <VideoItem
              videoInfo={param}
              key={param.id}
              activeVideo={props.activeVideo}
              setactiveVideo={props.setactiveVideo}
            />
          );
        })}
      </div>
    </>
  );
}
