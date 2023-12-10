import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";
import BigNewsCard from "../components/NewsCard";
const Main = () => {
  return (
    <div className="mainContainer">
      <div className="search-container">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="search" />
        </div>
        <input
          className="input"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <Button title="Search" />
      </div>
      <ResultsCard />
      <div className="topNewsContainer">
        <h3 className="topNews">Top News</h3>
        <h3 className="topNewsCaption"></h3>
      </div>
      <div className="newsSliderContainer">
        <div style={{ display: "flex" }}>
          <BigNewsCard />
          <BigNewsCard />
          <BigNewsCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
