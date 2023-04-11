import React from "react";

import { Item } from "./types";

const Filter = ({ cardInfo, setCardInfo }: Item) => {
  function filteredByYear() {
    const filteredCards =
      cardInfo && cardInfo.sort((a, b) => (a.year > b.year ? 1 : -1));
    setCardInfo(filteredCards);
    console.log(filteredCards);
    console.log("Я работаю");
  }

  return (
    <div className="filter-box container">
      <div className="filter-box__filter">
        <p>Sort by: </p>
        <button>Price</button>
        <button onClick={() => filteredByYear()}>Year</button>
      </div>
    </div>
  );
};

export default Filter;
