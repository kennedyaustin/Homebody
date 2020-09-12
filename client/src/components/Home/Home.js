import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import MuscleChoice from "../MuscleChoice/MuscleChoice";
import SubmitButton from "../buttons/SubmitButton/SubmitButton";
import Instructions from "../Instructions/Instructions";

const Home = () => {
  const bodyContext = useContext(BodyContext);

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row no-gutters d-flex justify-content-center">
          <Instructions />
        </div>
      </div>
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
