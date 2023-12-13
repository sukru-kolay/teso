import React from "react";
import locationIcon from "../../assets/locationIcon.svg";
const ResultsTable = ({ company, city, country, nameSurname, date }) => {
  return (
    <div className="resultTableContainer">
        <div>
            <img src={locationIcon} className="resultsTableIcon" alt="logo" />
        </div>
        <div className="resultsPartialsTablesContainer">
            <div className="resultsPartialsTablesContainerCompanyCity">
                <p className="black contentIsHere">{`${company}`}</p>
                <p className="black forCaption">{`${city}, ${country}`}</p>
            </div>
            <div className="resultsPartialsTablesContainerNameDate">
                <p className="black nameSurname">{`${nameSurname}`}</p>
                <p className="black date">{`${date}`}</p>
            </div>
        </div>
    </div>
  );
};

export default ResultsTable;