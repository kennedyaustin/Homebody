import React, { useState, useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import './style.css'

const MuscleChoice = ({ target, value, selected }) => {

  const { targets, setTargets } = useContext(BodyContext);

  const handleButtonClick = event => {
    const buttonTarget = event.target.attributes.getNamedItem("value").value
    console.log('Value: ' + buttonTarget)
    for (let i = 0; i < 4; i++) {
      if (targets[i].name === buttonTarget) {
        if (targets[i].selected) {
          setTargets([...targets], targets[i].selected = false)
        } else {
          setTargets([...targets], targets[i].selected = true)
        }
        console.log(targets[i].selected)
      }
    }
  }

  return (

    <div className="container">
      <div className='cardButtons '>
        <div
          value={value}
          onClick={
            handleButtonClick
          }
          className={(selected ? 'clicked' : 'notClicked')}>
          {target}
        </div>
      </div>
    </div>

  );
};

export default MuscleChoice;