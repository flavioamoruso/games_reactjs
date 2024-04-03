import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container nav-container">
          <header className="nav-header">
            <Link to="/" className="nav-brand">
              <h3>GameStart</h3>
            </Link>
            <div>
              <button className="icon-btn btn nav-toggler">
                <FaBars className="nav-icon" />
              </button>
            </div>
          </header>
          <a href="">Link 1</a>
          <a href="">Link 2</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
