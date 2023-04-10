import React from "react";

function Filter() {
  return (
    <div className="filter-box container">
      <div className="filter-box__filter">
        <p>Sort by: </p>
        <button>Price</button>
        <button>Year</button>
      </div>
    </div>
  );
}

export default Filter;
