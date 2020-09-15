import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import BodyContext from "../../utils/BodyContext";
import NewWorkoutButton from "../buttons/NewWorkoutButton/NewWorkoutButton";
import SaveButton from "../buttons/SaveButton/SaveButton";

/* This component is loaded when the user has selected one or more muscle targets and clicks the SubmitButton. 
Data from the workout global hook is mapped over to fill the card. */

function WorkoutCard() {
  const { workout } = useContext(BodyContext);

  return (
    <>
      <Card
        className="my-5 col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center page"
        text="light"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <Card.Body>
          <Card.Title className="text-center lead font-weight-bold">
            Your Workout
          </Card.Title>
          {workout.map((w) => {
            return (
              <div key={w.exerciseName}>
                <Card.Subtitle className="text-light mt-3 lead font-weight-bold">
                  Exercise:
                </Card.Subtitle>

                <Card.Text className="text-muted">{w.exerciseName}</Card.Text>

                <div
                  className="text-muted text-center"
                  style={{
                    borderBottom: "1px solid #333232",
                    paddingBottom: "20px",
                  }}
                >
                  <Card.Subtitle className="text-light lead font-weight-bold">
                    Description:
                  </Card.Subtitle>

                  <Card.Text>{w.exerciseInfo}</Card.Text>

                  <Card.Subtitle className="text-light lead font-weight-bold">
                    Alternative Exercises:
                  </Card.Subtitle>
                  <Card.Text>{w.alternatives.join(", ")}</Card.Text>
                </div>
              </div>
            );
          })}

          <div className="container mt-4">
            <div className="d-flex justify-content-center">
              <NewWorkoutButton />
              <SaveButton />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default WorkoutCard;
