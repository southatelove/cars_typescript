import React from "react";

import { Item } from "./types";

const Filter = ({ cardInfo, setCardInfo }: Item) => {
  const [filter, setFilter] = React.useState({ price: "UP", year: "UP" });

  const filteredByPrice = () => {
    if (filter.price === "UP") {
      setCardInfo(
        cardInfo && [...cardInfo].sort((a, b) => (a.price > b.price ? 1 : -1))
      );
      setFilter({ ...filter, price: "DOWN" });
    } else {
      setCardInfo(
        cardInfo && [...cardInfo].sort((a, b) => (a.price > b.price ? -1 : 1))
      );
      setFilter({ ...filter, price: "UP" });
    }
  };

  const filteredByYear = () => {
    if (filter.year === "UP") {
      setCardInfo(
        cardInfo && [...cardInfo].sort((a, b) => (a.year > b.year ? 1 : -1))
      );
      setFilter({ ...filter, year: "DOWN" });
    } else {
      setCardInfo(
        cardInfo && [...cardInfo].sort((a, b) => (a.year > b.year ? -1 : 1))
      );
      setFilter({ ...filter, year: "UP" });
    }
  };

  return (
    <div className="filter-box container">
      <div className="filter-box__filter">
        <p>Sort by: </p>
        <button onClick={() => filteredByPrice()}>
          Price
          {/* <span className={filter.year === "UP" ? }>@</span> */}
        </button>
        <button onClick={() => filteredByYear()}>Year</button>
      </div>
    </div>
  );
};

export default Filter;
