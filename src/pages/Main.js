import React, {useState, useEffect} from "react";
import searchIcon from "../assets/searchIcon.svg";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";
import BigNewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
import mockData from "../mock-data.json";
import { useDispatch } from "react-redux";
const Main = () => {
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
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
    // console.log(filteredData);
  }, [searchTerm, mockData.cols, mockData.data]);

  const handleSearchedText = () => {
    dispatch({ type: "INPUT_TEXT", payload: { searchedText: searchTerm } });
  };
  return (
    <div className="mainContainer">
      <div className="search-container">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="search" />
        </div>
        <input
          className="input"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            {
              e.target.value !== ""
                ? setIsDisabled(false)
                : setIsDisabled(true);
            }
          }}
        />
      </div>
      <Link to="/results">
        <div className="buttonContainer">
          <Button
            title="Search"
            disabled={isDisabled}
            onClick={handleSearchedText}
          />
        </div>
      </Link>

      { searchTerm && 
        <ResultsCard results={filteredData} searchTerm={searchTerm}/>
      }
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
