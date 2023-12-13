import React from "react";
import Table from "../Tables";
const ResultContainer = ({ searchedData }) => {
  return (
    <div className="resultContainer">
      {searchedData}
      <Table company="company" city="city" country="country" />
      <Table company="company" city="city" country="country" />
      <Table company="company" city="city" country="country" />
      <Table company="company" city="city" country="country" />
      <Table company="company" city="city" country="country" />
      <Table company="company" city="city" country="country" />
    </div>
  );
};

export default ResultContainer;
