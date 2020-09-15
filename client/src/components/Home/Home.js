import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import MuscleChoice from "../MuscleChoice/MuscleChoice";
import SubmitButton from "../buttons/SubmitButton/SubmitButton";
import Instructions from "../Instructions/Instructions";

/* Instructions component displayed, MuscleCoice component is mapped over using the "targets" global hook from bodyContext. 
Once the user has made at least one choice, the submit button becomes clickable. While the submit button is disabled a tooltip is displayed. 
Look at the SubmitButton component for functionality around creating the workout based on the user's choices. */

const Home = () => {
  const bodyContext = useContext(BodyContext);
  return (
    <>
      <Instructions />
      <div className="container page">
        <div className="row">
          {bodyContext.targets.options.map((t) => (
            <div key={t.name} className="col-6 col-md-3 mt-4">
              <MuscleChoice
                target={t.name}
                value={t.name}
                selected={t.selected}
              />
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-8 offset-2 text-center">
            <SubmitButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
