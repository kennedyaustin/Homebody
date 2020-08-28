import React, { useState } from "react";
import { css } from "emotion";

const Card = () => {
  const [background, setBackground] = useState("#fdfdfd");


  const setStyle= (background) => {
    setBackground(background)
  }

  const cardButtons = css`
    display: flex;
    flex-wrap: wrap;

    div {
      text-align: center;
      width: 25%;
      font-family: "Poppins", sans-serif;
      font-weight: 900;
      font-size: 18px;
      padding: 10px 50px 10px 20px;
      margin: auto;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  `;

  const muscleChoice = css`
    color: blue;
    background-color: ${background};
  `;

  return (

    <div className={cardButtons}>
      <div
      onClick= {() => {
        setStyle("black","white")
      }} 
      className={muscleChoice}>Muscle</div>
    </div>

  );
};

export default Card;