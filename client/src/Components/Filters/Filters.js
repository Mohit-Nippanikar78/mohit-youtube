import React, { useState } from "react";
import { useParams } from "react-router";
import "./Filters.css";

export default function Filters(props) {
  const [filterLeftBtn, setFilterLeftBtn] = useState("-1000px");
  const [filterRightBtn, setFilterRightBtn] = useState("0px");
  const [filterToggle, setFilterToggle] = useState(0);

  return (
    <>
      <div className="filter">
        <div className="filter-outer">
          <div
            className="filter-inner"
            id="filter-inner-id"
            onScroll={(event) => {
              event.target.scrollLeft > 0
                ? setFilterLeftBtn("0px")
                : setFilterLeftBtn("-1000px");

              event.target.scrollWidth - event.target.clientWidth ===
              Math.ceil(event.target.scrollLeft)
                ? setFilterRightBtn("-1000px")
                : setFilterRightBtn("0px");
            }}
          >
            <div className="filter-inner-btn" style={{ left: filterLeftBtn }}>
              <i
                className="fa fa-angle-left"
                id="filter-scroll-left"
                onClick={() => {
                  document
                    .getElementById("filter-inner-id")
                    .scrollBy({ top: 0, left: -200, behavior: "smooth" });
                }}
              ></i>
            </div>
            <div className="filter-inner-btn" style={{ top: filterRightBtn }}>
              <i
                className="fa fa-angle-right"
                id="filter-scroll-right"
                onClick={() => {
                  props.btnAnimation("filter-scroll-right");
                  document
                    .getElementById("filter-inner-id")
                    .scrollBy({ top: 0, left: 200, behavior: "smooth" });
                }}
              ></i>
            </div>
            <ul>
              {props.filterbtns?props.filterbtns.map(function (param, index) {
                return (
                  <li
                    className="filter-btn"
                    key={index}
                    onClick={() => {
                      if (param === "All") {
                        props.setShowHomeVideos(props.homeVideos);
                      } else {
                        props.setShowHomeVideos(
                          props.homeVideos.filter((a) => {
                            return a.filter === param;
                          })
                        );
                      }
                      setFilterToggle(index);
                    }}
                    style={{
                      background: filterToggle === index ? "white" : null,
                    }}
                  >
                    <div
                      style={{
                        width: "max-content",
                        color: filterToggle === index ? "black" : "white",
                        fontSize: "13px",
                      }}
                    >
                      {param}
                    </div>
                  </li>
                );
              }):""}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
