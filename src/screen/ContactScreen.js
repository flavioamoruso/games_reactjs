import React from "react";

const ContactScreen = () => {
  return (
    <>
      <form class="form">
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
        ></textarea>
        <div className="login-with">
          <div className="button-log"></div>
          <div className="button-log"></div>
          <div className="button-log"></div>
        </div>
        <button style={{ width: "100px" }} class="btn btn-secondary">
          Vai →
        </button>
      </form>
    </>
  );
};

export default ContactScreen;
