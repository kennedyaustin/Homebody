import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import './style.css'
const MuscleChoice = ({ target, value, selected }) => {
  const { targets, setTargets } = useContext(BodyContext);
  const handleButtonClick = event => {
    const buttonTarget = event.target.attributes.getNamedItem("value").value
    for (let i = 0; i < 4; i++) {
      if (targets.options[i].name === buttonTarget) {
        if (targets.options[i].selected) {
          setTargets({...targets}, targets.options[i].selected = false)
        } else {
          setTargets({...targets}, targets.options[i].selected = true)
        }
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

      <div>
      </div>
    </div>
  );
};
export default MuscleChoice;