import React, { useContext, useState } from "react";
import BodyContext from "../utils/BodyContext";
import MuscleType from "../components/MuscleChoice/MuscleChoiceBubble";
import MuscleTargetCard from "../components/MuscleTargetCard/MuscleTargetCard"

const Home = () => {
  const bodyContext = useContext(BodyContext);
  
  const [targets, setTargets] = useState([
    {
      name: 'Push',
      selected: false
    },
    {
      name: 'Pull',
      selected: false
    },
    {
      name: 'Legs',
      selected: false
    },
    {
      name: 'Core',
      selected: false
    }
  ])

  const handleButtonClick = () => {
    console.log('hi')
  }

  console.log(bodyContext.userState)

  

  return (
    <div className="container-fluid">
      <div className="row">

        {targets.map(t => 
          (
            <div className="col-6 col-md-3 ">
              <MuscleTargetCard
              key={t.name}
              target={t.name}
              />
            </div>
          )
        )}
        

      </div>
    </div>
  );
};

export default Home;
