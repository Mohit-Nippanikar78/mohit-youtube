import React, { useState } from "react";

export default function VideoItemOverlays(props) {
  const [videoPosterIconHover, setVideoPosterIconHover] = useState(false);
  const [videoPosterIconWidth, setVideoPosterIconWidth] = useState(0);
  return (
    <>
      <div
        className="home-video-poster-shortcut-icons-items"
        onMouseOver={() => {
          setVideoPosterIconHover(true);
        }}
        onMouseOut={() => {
          setVideoPosterIconHover(false);
        }}
        style={{
          opacity: props.videoBoxHover ? "1" : "0",
        }}
      >
        <a href="#"> 
        <div
          className="home-video-poster-shortcut-icons-items-0"
          style={{ position: "relative" }}
        >
          <div
            className="home-video-poster-shortcut-icons-items-1"
            ref={(el) => {
              if (!el) return;

              setVideoPosterIconWidth(el.getBoundingClientRect().width);
            }}
          >
            <props.icon
              style={{
                color: "white",
                background: videoPosterIconHover
                  ? "black"
                  : "rgba(0, 0, 0, 0.8)",
                padding: "3px",
                borderRadius: "10px",
                transition: videoPosterIconHover ? null : "ease-in 1s",
                borderTopLeftRadius: videoPosterIconHover ? "0px" : "10px",
                borderBottomLeftRadius: videoPosterIconHover ? "0px" : "10px",
              }}
            />
          </div>
          <div
            className="home-video-poster-shortcut-icons-items-2"
            style={{
              right: videoPosterIconWidth + "px",

              transform: videoPosterIconHover ? "scaleX(1)" : "scaleX(0)",
              background: videoPosterIconHover ? "black" : "rgba(0, 0, 0, 0.8)",
              height: "20px",
            }}
            onClick={() => {
              console.log("i am clicked a bus found");
            }}
          >
            {props.title}
          </div>
        </div>
        </a>

      </div>
    </>
  );
}
