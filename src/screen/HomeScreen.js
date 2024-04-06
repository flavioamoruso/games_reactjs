import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <div className="home-hero background-image" data-aos="fade-left">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color">Benvenuti su GameStart</h2>
            <h4>Creato apposta per te</h4>
          </div>

          <p style={{ color: "white" }}>
            Puoi scegliere tutti i videogiochi più venduti negli ultimi 10
            anni!!!
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contattami
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
