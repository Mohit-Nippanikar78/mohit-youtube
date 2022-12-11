import React, { useEffect, useState } from "react";
import "./home.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Filters from "../Components/Filters/Filters";
import Videos from "../Components/Videos/Videos";
import { Routes, Route } from "react-router-dom";
import Exam1 from "../Components/Exam1";
import Exam2 from "../Components/Exam2";
import NotFound from "../Components/NotFound";

export default function (props) {
  

  
  
  return (
    <>
      <div className="home-part2">
        <Sidebar />

        <div className="home-part3">
          <Filters
            btnAnimation={props.btnAnimation}
            homeVideos={props.homeVideos}
            showHomeVideos={props.showHomeVideos}
            setShowHomeVideos={props.setShowHomeVideos}
            filterbtns={props.filterbtns}
          />
          <div className="home-part4">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Videos
                    showHomeVideos={props.showHomeVideos}
                    activeVideo={props.activeVideo}
                    setactiveVideo={props.setactiveVideo}
                  />
                }
              />

              <Route exact path="/exam1" element={<Exam1 />} />

              <Route exact path="/exam2/:videoId" element={<Exam2 />} />
              <Route element={NotFound}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
