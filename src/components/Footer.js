import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer style={{ marginTop: "46px" }}>
        <div class="footerContainer">
          <div class="socialIcons">
            <a href="">
              <FaLinkedinIn size={18} />
            </a>
            <a href="">
              <FaFacebookF size={18} />
            </a>
            <a href="">
              <SiTiktok size={18} />
            </a>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            class="footerNav"
          >
            <Link to="/">
              {" "}
              <a href="">Home</a>
            </Link>

            <Link to="/about">
              <a href="">About</a>
            </Link>
            <Link to="/contact">
              <a href="">Contact Us</a>
            </Link>
          </div>
        </div>
        <div class="footerBottom">
          <p style={{ color: "black" }}>
            Copyright &copy;2024; Designed by{" "}
            <span class="designer">Games</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
