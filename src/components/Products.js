import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Products() {
  return (
    <div>
      <div id="products">
        <h1>CHOISISSEZ ET DÉGUSTEZ</h1>
          <p>
            Découvrez notre délicieux "Burger Signature" préparé avec une savoureuse galette de bœuf grillée, du fromage fondant, des légumes frais et une sauce secrète pour une expérience gustative inégalée. Le tout servi dans un pain brioché fraîchement cuit. C'est un choix parfait pour les amateurs de burgers.
          </p>
        <div className="a-container">
          <Productbox image={pimage1} title="Luger Burger" />
          <Productbox image={pimage2} title="Le Pigeon Burger" />
          <Productbox image={pimage1} title="Luger Burger" />
        </div>
      </div>
    </div>
  );
}

export default Products;
