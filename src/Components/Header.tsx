import React from "react";

import logo_trajectory from "../icons/logo_trajectory.svg";

function Header() {
  return (
    <section className="header-section">
      <div className="header-section__content-container container">
        <img src={logo_trajectory}></img>
      </div>
    </section>
  );
}
export default Header;
