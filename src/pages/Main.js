import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import Button from "../components/Button";
const Main = () => {
  return (
    <>
      <div className="search-button">
        <div className="search-container">
          <div className="input-container">
            <img src={searchIcon} className="search-icon" alt="search" />
            <input className="input" placeholder="Search..." />
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default Main;
