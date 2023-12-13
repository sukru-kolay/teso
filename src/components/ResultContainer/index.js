import React from "react";
import Table from "../Tables";
import { Link } from "react-router-dom";
import ResultsTable from "../ResultsTable";
const ResultContainer = ({ searchedData, filteredData }) => {
  // return (
  //   <div className="resultContainer">
  //     {searchedData}
  //     <Table company="company" city="city" country="country" />
  //     <Table company="company" city="city" country="country" />
  //     <Table company="company" city="city" country="country" />
  //     <Table company="company" city="city" country="country" />
  //     <Table company="company" city="city" country="country" />
  //     <Table company="company" city="city" country="country" />
  //   </div>
  // );

  const firstThreeResults = filteredData.slice(0, 5);
  return (
    <div className="resultContainer">
      {firstThreeResults.map((result, index) => (
        <>
          <ResultsTable
            key={index}
            company={result[2]}
            city={result[7]}
            country={result[6]}
            nameSurname={result[1]}
            date={result[8]}
          />
          <div className="dividers"></div>
        </>
      ))}

    </div>
  );
};

export default ResultContainer;
