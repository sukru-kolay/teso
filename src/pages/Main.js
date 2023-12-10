import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";
import BigNewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import axios from "axios";
import mockData from "../mock-data.json";
import { useState, useEffect } from "react";
const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = mockData.data.filter((item) =>
      item[mockData.cols.indexOf("nameSurname")]
        .toLowerCase()
        .includes(lowerCaseSearchTerm)
    );
    setFilteredData(filteredData);
    console.log(filteredData);
  }, [searchTerm, mockData.cols, mockData.data]);
  return (
    <div className="mainContainer">
      <div className="search-container">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="search" />
        </div>
        <input
          className="input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Link to="/results">
        <div className="buttonContainer">
          <Button title="Search" />
        </div>
      </Link>

      <ResultsCard results={filteredData} />
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
