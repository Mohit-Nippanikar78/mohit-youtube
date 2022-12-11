import React from "react";
import SearchVideo from "./SearchVideo/SearchVideo";

export default function SearchContent(props) {
  return (
    <div className="home-videos-container">
      {props.homeVideos
        .filter((video) => {
          if (
            video.title.toLowerCase().includes(props.searchText.toLowerCase())
          ) {
            return video;
          }
        })
        .map((video, index) => {
          return (
            <SearchVideo
              videoInfo={video}
              key={index}
              setactiveVideo={props.setactiveVideo}
            />
          );
        })}
    </div>
  );
}
