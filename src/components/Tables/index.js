import React from "react";
import locationIcon from "../../assets/locationIcon.svg";
const Table = () => {
  return (
    <div className="tableContainer">
      <div>
        <img src={locationIcon} className="tableIcon" alt="logo" />
      </div>
      <div className="partialsContainer">
        <p className="black contentIsHere">18th Street Brewery</p>
        <p className="black forCaption">Oakley Avenue, Hammond, IN</p>
      </div>
    </div>
  );
};

export default Table;
