import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

    function handleDatePicker (){
        setShowSearch(!showSearch)
    }
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button  onClick={handleDatePicker} className="banner__searchButton" variant="outlined">{showSearch ? "Hide" : "Search"}</Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gem near you
        </h5>
        <Button onClick={() => navigate('/search')} variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
