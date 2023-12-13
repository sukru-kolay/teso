import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import searchIcon from "../assets/searchIcon.svg";
import smallLogo from "../smallLogo.svg";
import Table from "../components/Tables";
import { useSelector } from "react-redux";
const ResultPage = () => {
  const inputText = useSelector((selector) => selector.searchedText); // selector denen şey yukarıdaki initial state oluyor.
  const [searchTerm, setSearchTerm] = React.useState();
  const [isDisabled, setIsDisabled] = React.useState(true);

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

      <div className="resultContainer">
        <Table company="company" city="city" country="country" />
        <Table company="company" city="city" country="country" />
        <Table company="company" city="city" country="country" />
        <Table company="company" city="city" country="country" />
        <Table company="company" city="city" country="country" />
        <Table company="company" city="city" country="country" />
      </div>
    </div>
  );
};

export default ResultPage;
