import React from "react";

import arrow_icon from "../icons/arrow_icon.svg";

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
          <img
            src={arrow_icon}
            className={filter.price === "UP" ? "arrowUp" : "arrowDown"}
          />
        </button>
        <button onClick={() => filteredByYear()}>
          Year
          <img
            src={arrow_icon}
            className={filter.year === "UP" ? "arrowUp" : "arrowDown"}
          />
        </button>
      </div>
    </div>
  );
};

export default Filter;
