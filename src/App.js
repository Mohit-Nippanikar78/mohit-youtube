import Header from "./Components/Header/Header";
import Hidebar from "./Components/Hidebar/Hidebar";
import Sidebar from "./Components/Sidebar/Sidebar";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Videos from "./Components/Videos/Videos";
import Account from "./Components/Account/Account";
import UploadContent from "./Components/UploadContent/UploadContent";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Suggestions from "./Components/Header/Suggestions/Suggestions";

import Exam1 from "./Components/Exam1";
import Exam2 from "./Components/Exam2";
import NotFound from "./Components/NotFound";
import Home from "./main/home";
import SearchContent from "./Components/SearchContent/SearchContent";

import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const [hidebar, setHidebar] = useState(false);
  const [suggestions, setsuggestions] = useState(false);
  const [accInfo, setAccInfo] = useState(false);
  const [sidebarDisplay, setsidebarDisplay] = useState(true);
  window.addEventListener("DOMContentLoaded", function () {
    window.location.pathname.slice(0, 2) === "/p" && setsidebarDisplay(false);
  });

  const btnAnimation = (param) => {
    let paramElement = document.getElementById(param);
    paramElement.style.borderRadius = "100%";
    paramElement.style.animation = " 600ms ani-interest-btn ease";
    setTimeout(() => {
      paramElement.style.animation = "";
    }, 600);
  };
  // url,thumbnail,channelImage,title,channelName,verified,duration,filter
  const videos = [
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635851608/yt1s.com_-_Sigma_Male_Johnny_English_Sigma_Grindset_Meme_yklhyb.mp4",
      thumbnail:
        "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701410521.jpg",
      channelImage:
        "https://media.breitbart.com/media/2018/07/donald-trump-4.png",
      channelName: "Donald Trump",
      verified: true,
      duration: "1:47",
      filter: "Minecraft Co-operation",
    },
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635850947/Minecraft_1.16_Speedrun_1-12_WORLD_RECORD_v0ga6v.mp4",
      thumbnail:
        "https://i2.wp.com/narikchase.com/wp-content/uploads/2016/12/Minecraft-Story-Mode.jpg?resize=728%2C409&ssl=1",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRL4TDvw0IOANXtLLO4_aw-gWZRE_i_ATWZq7FZniM=s900-c-k-c0x00ffffff-no-rj",
      channelName: "Chokidaar",
      verified: true,
      duration: "1:47",
      filter: "Narendra Modi",
    },
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635850944/Champaklal_And_Jethalal_s_Funny_Moment_-_Taarak_Mehta_Ka_Ooltah_Chashmah_zw7kqb.mp4",
      thumbnail:
        "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701410521.jpg",
      channelImage:
        "https://media.breitbart.com/media/2018/07/donald-trump-4.png",
      channelName: "Donald Trump",
      verified: true,
      duration: "1:47",
      filter: "Donald Trump",
    },
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635850941/Javascript_Play_Video_on_Mouse_Hover_and_Pause_on_Mouseout_-_Video_Gallery_klzuh3.mp4",
      thumbnail:
        "https://i2.wp.com/narikchase.com/wp-content/uploads/2016/12/Minecraft-Story-Mode.jpg?resize=728%2C409&ssl=1",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRL4TDvw0IOANXtLLO4_aw-gWZRE_i_ATWZq7FZniM=s900-c-k-c0x00ffffff-no-rj",
      title: "Modi playing Minecraft . Dont miss it! 🔥✨ ",
      channelName: "Chokidaar",
      verified: true,
      duration: "1:47",
      filter: "Glitch in Minecraft",
    },

    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635850817/How_To_Learn_Programming_for_BEGINNERS_2019_2020_fnpxyn.mp4",
      thumbnail:
        "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701410521.jpg",
      channelImage:
        "https://media.breitbart.com/media/2018/07/donald-trump-4.png",

      channelName: "Donald Trump",
      verified: true,
      duration: "1:47",
      filter:
        "Mr.Beast Gaming and Dream playing minecraft for very first time and also joined with Tommy young college boi",
    },
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635850793/Explainer_Video_Bitcoin_industry_-_Promo_Video_Lab_iiykwa.mp4",
      thumbnail:
        "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701410521.jpg",
      channelImage:
        "https://media.breitbart.com/media/2018/07/donald-trump-4.png",
      channelName: "Donald Trump",
      verified: true,
      duration: "1:47",
      filter:
        "Mr.Beast Gaming and Dream playing minecraft for very first time and also joined with Tommy young college boi",
    },
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635850775/Sass_in_100_Seconds_xd9vux.mp4",
      thumbnail:
        "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701410521.jpg",
      channelImage:
        "https://media.breitbart.com/media/2018/07/donald-trump-4.png",
      channelName: "Donald Trump",
      verified: true,
      duration: "1:47",
      filter:
        "Mr.Beast Gaming and Dream playing minecraft for very first time and also joined with Tommy young college boi",
    },
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635851622/yt1s.com_-_Sigma_Rule_58_Sigma_Rules_ylxle9.mp4",
      thumbnail:
        "https://i2.wp.com/narikchase.com/wp-content/uploads/2016/12/Minecraft-Story-Mode.jpg?resize=728%2C409&ssl=1",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRL4TDvw0IOANXtLLO4_aw-gWZRE_i_ATWZq7FZniM=s900-c-k-c0x00ffffff-no-rj",
      channelName: "Chokidaar",
      verified: true,
      duration: "1:47",
      filter: "Gaming",
    },
    {
      url: "https://res.cloudinary.com/dk5acaaxg/video/upload/v1635850874/He_Speaks_Faster_than_Eminem_d8b4wp.mp4",
      thumbnail:
        "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701410521.jpg",
      channelImage:
        "https://media.breitbart.com/media/2018/07/donald-trump-4.png",

      channelName: "Donald Trump",
      verified: true,
      duration: "1:47",
      filter: "Markpilier",
    },
  ];

  const homeVideos = [];
  videos.forEach(function (params, index) {
    params.id = index;

    let urlArr = params.url.split("");

    let titleName = [];

    for (
      let i = urlArr.lastIndexOf("/") + 1;
      i < urlArr.lastIndexOf(".");
      i++
    ) {
      titleName.push(urlArr[i]);
    }
    titleName.forEach(function (param) {
      if (param === "_") {
        titleName[titleName.indexOf(param)] = " ";
      }
    });

    params.title = titleName.slice(0, titleName.lastIndexOf(" ")).join("");

    homeVideos.push(params);
  });

  const filterbtns = ["All"];
  const [showHomeVideos, setShowHomeVideos] = useState(homeVideos);
  const [activeVideo, setactiveVideo] = useState(homeVideos[0]);
  useEffect(() => {
    console.log(activeVideo);
  }, [activeVideo]);

  videos.forEach(function (params) {
    filterbtns.push(params.filter);
  });

  window.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      document.getElementById("head21-searchbtn").click();
    }
  });

  return (
    <div
      onClick={() => {
        window.location.pathname.slice(0, 2) === "/p"
          ? setsidebarDisplay(false)
          : setsidebarDisplay(true);
      }}
    >
      <BrowserRouter>
        <Header
          setHidebar={setHidebar}
          hidebar={hidebar}
          btnAnimation={btnAnimation}
          setsuggestions={setsuggestions}
          suggestions={suggestions}
          searchText={searchText}
          setSearchText={setSearchText}
          videos={videos}
          setAccInfo={setAccInfo}
          accInfo={accInfo}
        />
        <Hidebar
          setHidebar={setHidebar}
          hidebar={hidebar}
          btnAnimation={btnAnimation}
        />
        {suggestions ? (
          <Suggestions
            videos={videos}
            searchText={searchText}
            setSearchText={setSearchText}
            setsuggestions={setsuggestions}
          />
        ) : (
          <></>
        )}
        <Account setAccInfo={setAccInfo} accInfo={accInfo} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                btnAnimation={btnAnimation}
                homeVideos={homeVideos}
                showHomeVideos={showHomeVideos}
                setShowHomeVideos={setShowHomeVideos}
                 filterbtns={filterbtns}

                activeVideo={activeVideo}
                setactiveVideo={setactiveVideo}
              />
            }
          />

          <Route exact path="/exam1" ele={<Exam1 />} />
        </Routes>
        {/* <div className="home-part2">
          {sidebarDisplay ? <Sidebar /> : <></>}

          <div
            className="home-part3"
            style={{ marginLeft: !sidebarDisplay && "0px" }}
          >
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Videos
                    homeVideos={homeVideos}
                    showHomeVideos={showHomeVideos}
                    activeVideo={activeVideo}
                    setactiveVideo={setactiveVideo}
                    filterbtns={filterbtns}
                    setShowHomeVideos={setShowHomeVideos}
                    btnAnimation={btnAnimation}
                  />
                }
              />
              <Route
                exact
                path="/search"
                element={
                  <SearchContent
                    searchText={searchText}
                    homeVideos={homeVideos}
                    setactiveVideo={setactiveVideo}
                  />
                }
              />

              <Route exact path="/exam1" element={Exam1} />

              <Route exact path="/exam2/:account" element={Exam2} />
              <Route
                exact
                path="/p/:videoId"
                element={
                  <VideoPlayer
                    homeVideos={homeVideos}
                    activeVideo={activeVideo}
                    setactiveVideo={setactiveVideo}
                  />
                }
              />
              <Route exact path="/upload" element={UploadContent} />

              <Route element={NotFound}></Route>
            </Routes>
          </div>
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
