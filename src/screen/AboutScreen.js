import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/aboutAnimation.json";
import useTitle from "../useTitle";

const AboutScreen = () => {
  useTitle("Chi siamo");
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color">La nostra storia</h2>
          </div>

          <p>
            Siamo un gruppo di ragazzi e ragazze appasionati dal game in tutte
            le sue sfaccettature, cosi' abbiamo creato questo sito web che da la
            possibilita a tutti di visionare i giochi più richiesti
          </p>
        </div>
        <div className="home-hero-img">
          <Lottie
            style={{ marginBottom: "14px" }}
            className=""
            options={{
              loop: true,
              autoplay: true,
              reverse: true,
              animationData,
            }}
            width={200}
            height={200}
          />
        </div>
      </div>
      <section>
        <h2 style={{ textAlign: "center" }}>Il nostro team</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "14px",
          }}
        >
          <div className="bg-1">
            <p className="posizioni">Sfera Ebbasta</p>
          </div>

          <div className="bg-2">
            <p className="posizioni">Geolier</p>
          </div>

          <div className="bg-3">
            <p className="posizioni">Rose Villain</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
