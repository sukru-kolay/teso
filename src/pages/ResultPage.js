import React,{useEffect, useState} from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import searchIcon from "../assets/searchIcon.svg";
import smallLogo from "../smallLogo.svg";
import Table from "../components/Tables";
import { useSelector } from "react-redux";
import ResultContainer from "../components/ResultContainer";
import mockData from "../mock-data.json";

const ResultPage = () => {
  const inputText = useSelector((selector) => selector.searchedText); // selector denen şey yukarıdaki initial state oluyor.
  const [searchTerm, setSearchTerm] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  // const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const lowerCaseSearchTerm = inputText.toLowerCase();
    const filteredData = mockData.data.filter((item) =>
      item[mockData.cols.indexOf("nameSurname")]
        .toLowerCase()
        .includes(lowerCaseSearchTerm)
    );
    setFilteredData(filteredData);
    // console.log(filteredData);
  }, [inputText, mockData.cols, mockData.data]);
  return (
    <div>
      <Link to="/">
        <img src={smallLogo} className="smallLogo" alt="logo" />
      </Link>
      <div className="searchContainerResult">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="search" />
        </div>
        <input
          value={inputText}
          className="inputResult"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <Link to="/results">
        <div className="buttonContainerResult">
          <Button title="Search" />
        </div>
      </Link>
      <Link to="/addLink">
        <div className="addNewRecordbuttonContainerResult">
          <Button title="Add new record" />
        </div>
      </Link>

      <ResultContainer searchedData={inputText} filteredData = {filteredData} />
    </div>
  );
};

export default ResultPage;
