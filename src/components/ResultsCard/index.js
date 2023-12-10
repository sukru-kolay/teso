import React from "react";
import Table from "../Tables";
import { Link } from "react-router-dom";
const ResultsCard = ({ results }) => {
  const firstThreeResults = results.slice(0, 3);
  return (
    <div className="resultCard">
      {firstThreeResults.map((result, index) => (
        <>
          <Table
            key={index}
            company={result[2]}
            city={result[7]}
            country={result[6]}
          />
          <div className="dividers"></div>
        </>
      ))}
      <Link to="/results">
        <div className="showMore">Show more</div>
      </Link>
    </div>
  );
};
export default ResultsCard;
