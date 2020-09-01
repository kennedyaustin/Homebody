import React, { useContext } from "react";
import BodyContext from "../utils/BodyContext";
import MuscleChoice from "../components/MuscleChoice/MuscleChoice";
import SubmitButton from "../components/SubmitButton/SubmitButton";

const Home = () => {
  const bodyContext = useContext(BodyContext);

  return (
    <div className="container">
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
  );
};

export default Home;