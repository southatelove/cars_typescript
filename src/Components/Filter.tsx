import { useState } from "react";

import arrow_icon from "../icons/arrow_icon.svg";

import { Item } from "./types";

export const Filter = ({ cardInfo, setCardInfo }: Item) => {
  const [filter, setFilter] = useState({ price: "UP", year: "UP" });

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
        <button className="filter-box__btn-map">
          <a href="#maps" className="filter-box__text">
            Местоположение
          </a>
        </button>
        <div className="filter-box__sort">
          <p>Сортировать: </p>
          <button
            className="filter-box__btn-filter"
            onClick={() => filteredByPrice()}
          >
            Цена
            <img
              src={arrow_icon}
              className={filter.price === "UP" ? "arrowUp" : "arrowDown"}
            />
          </button>
          <button
            className="filter-box__btn-filter"
            onClick={() => filteredByYear()}
          >
            Год
            <img
              src={arrow_icon}
              className={filter.year === "UP" ? "arrowUp" : "arrowDown"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
