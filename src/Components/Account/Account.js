import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./Account.css";

export default function (props) {
  return (
    <div
      className="acc"
      style={{
        border: props.accInfo ? "1px solid black" : "none",
        height: props.accInfo ? "400px" : "0px",
        
        
      }}
    >
      <div
        className="acc-info"
        style={{
        
        }}
      >
        <img
          src="https://media0.giphy.com/media/1zKdb4WSHgY4QKAsjo/giphy.gif"
          alt=""
        />
        <div className="acc-info-name">Mark ZuckerBerg</div>
      </div>
      <div
        className="acc-others"
        id="acc-others"
      >
        others
      </div>
    </div>
  );
}
