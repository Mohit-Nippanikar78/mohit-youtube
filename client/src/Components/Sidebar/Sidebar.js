import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  let homeSidebar = [
    {
      icon: "fa sidebaricons fa-home guide-icon",
      title: "Home",
      link: "/exam1",
    },
    { icon: "fa sidebaricons fa-globe", title: "Explore" ,  link: "/exam2", },
    { icon: "fas fa-chart-line", title: "Trending" ,  link: "/home/Exam1",},
    { icon: "fas fa-photo-video", title: "Library" ,  link: "/home/Exam1",},
  ];
  return (
    <>
      <div className="sidebar">
        <ul>
          {homeSidebar.map(function (param, index) {
            return (
              <li key={index}  >
                <Link to={param.link} >
                  <div className="sidebar-option-lines">

                  <div className="sidebar-option-line-one" >
                    <i className={param.icon}  aria-hidden="true"></i>
                  </div>
                  <div className="sidebar-option-line-two" >{param.title}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
