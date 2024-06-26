import React from "react";

export function Giochi(props) {
  return (
    <>
      <div class="card">
        <div>
          <div class="img">
            <img className="border" src={props.img} width={180} height={100} />
          </div>
        </div>
        <div class="card-title">{props.title}</div>
        <hr class="card-divider" />
        <div class="card-footer">
          <div class="card-price">{props.price}</div>
        </div>
      </div>
    </>
  );
}

export default Giochi;
