import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "./SearchVideo.css";
import { GoVerified } from "react-icons/go";
import { FaEllipsisV } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

export default function VideoItem(props) {
  const [videoHovered, setVideoHovered] = useState(false);
  const [videoBoxHover, setVideoBoxHover] = useState(false);
  const [homeVideoOptionTable, setHomeVideoOptionTable] = useState(false);

  return (
    <>
      <div
        key={props.videoInfo.id}
        className="home-video"
        onMouseOver={() => {
          setVideoBoxHover(true);
        }}
        onMouseOut={() => {
          setVideoBoxHover(false);
        }}
        onClick={() => {
          props.setactiveVideo(props.videoInfo);
        }}
      >
        <div className="home-video-poster">
          <Link to={"/p/" + props.videoInfo.id}>
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
              id="home-video-poster-video"
              className="home-video-poster-video"
              onMouseOver={() => {
                setVideoHovered(true);
              }}
              onMouseOut={() => {
                setVideoHovered(false);
              }}
            >
              <HoverVideoPlayer
                videoSrc={props.videoInfo.url}
                pausedOverlay={
                  <img
                    src={props.videoInfo.thumbnail}
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions

                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      overflow: "visible",
                    }}
                  />
                }
                overlayTransitionDuration={200}
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div
              className="home-video-poster-timing"
              style={{ display: videoHovered ? "none" : "block" }}
            >
              {props.videoInfo.duration}
            </div>
            <div
              className="home-video-poster-shortcut"
              style={{ height: "0px" }}
            >
              <div className="home-video-poster-shortcut-icons">
                {/* <VideoItemOverlays
                  icon={MdOutlineWatchLater}
                  title={"Watch Later"}
                  setVideoHovered={setVideoHovered}
                  videoBoxHover={videoBoxHover}
                  setVideoBoxHover={setVideoBoxHover}
                />
                <VideoItemOverlays
                  icon={AiOutlineAppstoreAdd}
                  title={"Add to Que"}
                  setVideoHovered={setVideoHovered}
                  videoBoxHover={videoBoxHover}
                  setVideoBoxHover={setVideoBoxHover}
                /> */}
              </div>
            </div>
          </Link>
        </div>
        <div className="home-video-info">
          <div className="home-video-info-photo">
            <img src={props.videoInfo.channelImage} alt="" />
          </div>
          <div className="home-video-info-outlet">
            <div className="home-video-info-title">{props.videoInfo.title}</div>
            <div className="home-video-info-channel-name">
              <div
                className="home-video-info-channel-name-title"
                style={{ display: "inline-block" }}
              >
                {props.videoInfo.channelName}
              </div>
              <div style={{ display: "inline-block", marginLeft: "3px" }}>
                {props.videoInfo.verified === true ? <GoVerified /> : ``}
              </div>
            </div>
            <div className="home-video-info-details">
              <span className="home-video-info-details-views">133k views</span>
              <span> · </span>
              <span className="home-video-info-details-time">1year ago</span>
            </div>
          </div>
          <div
            className="home-video-info-option"
            style={{ display: videoBoxHover ? "block" : "none" }}
          >
            {homeVideoOptionTable ? (
              <ImCross
                onClick={() => {
                  setHomeVideoOptionTable(false);
                }}
              />
            ) : (
              <FaEllipsisV
                onClick={() => {
                  setHomeVideoOptionTable(true);
                }}
              />
            )}
          </div>
        </div>
        <div
          className="home-video-option-table"
          style={{
            // right: props.videoInfo.id % 4 === 0 ? "0px" : "-130px",
            display: homeVideoOptionTable === true ? "block" : "none",
          }}
        >
          <OutsideClickHandler
            onOutsideClick={() => {
              setHomeVideoOptionTable(false);
            }}
          >
            <div
              className="home-video-options"
              onClick={() => {
                setHomeVideoOptionTable(false);
              }}
            >
              <div className="home-video-options-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="home-video-options-title">
                <h2>Add to Queue</h2>
              </div>
            </div>
            <div
              className="home-video-options"
              onClick={() => {
                setHomeVideoOptionTable(false);
              }}
            >
              <div className="home-video-options-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="home-video-options-title">
                <h2>Add to Queue</h2>
              </div>
            </div>
            <div
              className="home-video-options"
              onClick={() => {
                setHomeVideoOptionTable(false);
              }}
            >
              <div className="home-video-options-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="home-video-options-title">
                <h2>Add to Queue</h2>
              </div>
            </div>
            <div
              className="home-video-options"
              onClick={() => {
                setHomeVideoOptionTable(false);
              }}
            >
              <div className="home-video-options-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="home-video-options-title">
                <h2>Add to Queue</h2>
              </div>
            </div>
            <div
              className="home-video-options"
              onClick={() => {
                setHomeVideoOptionTable(false);
              }}
            >
              <div className="home-video-options-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="home-video-options-title">
                <h2>Add to Queue</h2>
              </div>
            </div>
            <div
              className="home-video-options"
              onClick={() => {
                setHomeVideoOptionTable(false);
              }}
            >
              <div className="home-video-options-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="home-video-options-title">
                <h2>Add to Queue</h2>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </>
  );
}
