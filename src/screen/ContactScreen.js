import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

const ContactScreen = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "24px",
          textAlign: "center",
        }}
      >
        <h4>
          Se desideri più informazioni riguardanti questo sito non eistare a
          contattarci qui sotto
        </h4>
      </div>
      <form class="form" action="https://formspree.io/f/mrgnolwg" method="POST">
        <div style={{ color: "black" }} class="title">
          Contattaci
          <br />
          <span></span>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input"
        />
        <input
          type="text"
          placeholder="Nome e cognome"
          name="name"
          className="input"
        />
        <textarea
          className="input"
          placeholder="Di cosa hai bisogno?"
          name="message"
        ></textarea>
        <div className="login-with">
          <div className="button-log">
            <a href="https://www.linkedin.com/in/flavio-amoruso-fullstackdeveloper/">
              <FaLinkedinIn size={22} />
            </a>
          </div>
          <div className="button-log">
            <a href="https://www.facebook.com/">
              <FaFacebookF size={22} />
            </a>
          </div>
          <div className="button-log">
            <a href="https://www.tiktok.com/login/phone-or-email">
              <SiTiktok size={22} />
            </a>
          </div>
        </div>
        <button
          type="submit"
          style={{ width: "100px" }}
          class="btn btn-secondary"
        >
          Vai →
        </button>
      </form>
    </>
  );
};

export default ContactScreen;
