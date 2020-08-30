import React, { useContext, useState } from "react";
import BodyContext from "../utils/BodyContext";
import MuscleType from "../components/MuscleChoice/MuscleChoiceBubble";

const Home = () => {
  //const bodyContext = useContext(BodyContext);
  const {userState, setUserState, targets, setTargets} = useContext(BodyContext)

  return (
    <div className="container-fluid">
      <div className="row">

        {targets.map(t => 
          (
            <div className="col-6 col-md-3 mt-4">
              <MuscleType
              key={t.name}
              target={t.name}
              value={t.name}
              selected={t.selected}
              />
            </div>
          )
        )}
        

      </div>
    </div>
  );
};

export default Home;
