import React from "react";
import { Giochi } from "../components/Game";
import contents from "../utils/contents";

export default function App() {
  return (
    <>
      <section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ marginTop: "42px" }}>Videogiochi</h2>
        </div>
        <div className="justify">
          <div className="position-card" style={{ marginTop: "32px" }}>
            {contents.map((contents) => (
              <Giochi
                key={contents.id}
                title={contents.title}
                price={contents.price}
                img={contents.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
