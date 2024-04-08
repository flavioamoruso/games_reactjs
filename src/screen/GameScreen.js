import React from "react";
import contents from "../utils/contents";
import { Giochi } from "../components/Game";

export default function App() {
  return (
    <>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "42px",
          }}
        >
          <h3>Videogiochi più famosi</h3>
        </div>
        <div style={{ marginTop: "102px" }}>
          {contents.map((contents) => {
            <Giochi
              key={contents.id}
              title={contents.title}
              price={contents.price}
              img={contents.img}
            />;
          })}
        </div>
      </section>
    </>
  );
}
