import React, { useState } from "react";
import { css } from "emotion";

const Card = ({target}) => {
  const [background, setBackground] = useState("black");
  const [font, setFont] = useState("white");

  const setStyle= (background, font) => {
    setBackground(background)
    setFont(font)
  }

  const cardButtons = css`
    display: flex;
    flex-wrap: wrap;
    div {
      text-align: center;
      width: 100%;
      font-family: "Poppins", sans-serif;
      font-weight: 900;
      font-size: 18px;
      padding: 10px 30px;
      margin: 0;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  `;

  const muscleChoice = css`
    color: ${font};
    background-color: ${background};
  `;

  return (

    <div className= "container">
      <div className= "row">
        <div className= "col-12 col-md-8 col-lg-6 offset-lg-2 order-md-0 order-sm-1 order-1 my-4">
          <div className={cardButtons}>
            <div
            onClick= {() => {
              setStyle("gray", "black")
            }} 
            className= {muscleChoice}>
              {target}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;