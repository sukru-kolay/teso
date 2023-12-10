import React from "react";
import locationIcon from "../../assets/locationIcon.svg";
const Table = ({ company, city, country }) => {
  return (
    <div className="tableContainer">
      <div>
        <img src={locationIcon} className="tableIcon" alt="logo" />
      </div>
      <div className="partialsContainer">
        <p className="black contentIsHere">{`${company}`}</p>
        <p className="black forCaption">{`${city}, ${country}`}</p>
      </div>
    </div>
  );
};

export default Table;
