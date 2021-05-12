import React from "react";
import './Card.css';

function Card({ brand }) {
  return (
    <div className="comp">
      <div className="card">
          <div class="card_head">
          <img
            alt={brand.name}
            src={brand.imgpath}
          />
        </div>
        <div class="card_bottom">
          <h4 class="card_text">{brand.text}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
