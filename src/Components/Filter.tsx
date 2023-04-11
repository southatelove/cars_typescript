import React from "react";

import { Item } from "./types";

const Filter = ({ cardInfo, setCardInfo }: Item) => {
  const filteredByYear = () => {
    setCardInfo(
      cardInfo && [...cardInfo].sort((a, b) => (a.year > b.year ? 1 : -1))
    );
  };

  const filteredByPrice = () => {
    setCardInfo(
      cardInfo && [...cardInfo].sort((a, b) => (a.price > b.price ? 1 : -1))
    );
  };
  return (
    <div className="filter-box container">
      <div className="filter-box__filter">
        <p>Sort by: </p>
        <button onClick={() => filteredByPrice()}>Price</button>
        <button onClick={() => filteredByYear()}>Year</button>
      </div>
    </div>
  );
};

export default Filter;
