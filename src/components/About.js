import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
      <h1>NOS BURGERS À VENIR</h1>
        <p>
          Que vous aimiez les burgers classiques ou les créations spéciales, notre menu saura satisfaire toutes vos envies. Venez vivre une expérience gustative inoubliable chez nous.
        </p>
        <button>En savoir plus</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
