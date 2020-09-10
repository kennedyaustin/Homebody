import React from "react";
import NewWorkoutButton from '../buttons/NewWorkoutButton/NewWorkoutButton'
import DeleteButton from '../buttons/DeleteButton/DeleteButton'
import { Card } from "react-bootstrap";

function SavedWorkoutCard({ date, exercises }) {
  return (
    <>
      <Card className="col-12 col-md-5 bg-dark text-light m-md-4">
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          {exercises.map(e => {
            return (<div key={e._id}>
              <Card.Subtitle className="my-2 text-muted">
                Exercise:
              </Card.Subtitle>
              <Card.Text>
                {e.exerciseName}
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Description:
              </Card.Subtitle>
              <Card.Text>
                {e.exerciseInfo}
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Alternatives:
              </Card.Subtitle>
              <Card.Text>
                {e.alternatives.join(', ')}
              </Card.Text>
              <hr className="border-light" />
            </div>)
          })}

          <div className="text-center">
            <NewWorkoutButton />
            <DeleteButton />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SavedWorkoutCard;
