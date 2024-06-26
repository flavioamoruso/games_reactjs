import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinkComponent } from "../utils/links";
import { useGlobalContext } from "../context";
import Switch from "./Switch";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="nav rubik-scribble-regular">
      <div className="container nav-container">
        <header className="nav-header">
          <Link to="/" className="nav-brand">
            <h3>Gamestart</h3>
          </Link>
          <div>
            <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
              <FaBars className="nav-icon" />
            </button>
          </div>
        </header>
        <LinkComponent classLink="nav-links" />
        <Switch />
      </div>
    </nav>
  );
};

export default Navbar;
