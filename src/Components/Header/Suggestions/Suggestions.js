import React from "react";
import "./Suggestions.css";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export default function (props) {
  const [searchBarStyles, setsearchBarStyles] = useState(0);

  setTimeout(() => {
    setsearchBarStyles(
      document.getElementById("searchBar").getBoundingClientRect()
    );
  }, 10);

  return (
    <>
      <div
        className="head21-input-suggestions"
        style={{
          left: searchBarStyles.left,
          width: searchBarStyles.width,
          top: searchBarStyles.bottom,
        }}
      >
        {props.videos
          .filter((item) => {
            
             if(  item.title.toLowerCase().includes(props.searchText.toLowerCase())){
               return item;
             }
            
          })
          .map((ele, index) => {
            return (
              <>  <Link to="/search"> 
                <div
                  key={index}
                  className="head21-input-suggestions-box"
                  onClick={(e) => {
                    
                    props.setSearchText(ele.title);
                    props.setsuggestions(false);

                  }}
                >

                  {ele.title}
                </div></Link>
              </>
            );
          })}
      </div>
    </>
  );
}
