import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
      <h3>C'est le moment idéal pour déguster un délicieux burger</h3>
        <h1>
          <span>BURGER </span> <br /> SEMAINE
        </h1>
        <p className="details">
          Découvrez des saveurs exceptionnelles, préparées avec des <br></br>ingrédients de qualité.
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Commander
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
