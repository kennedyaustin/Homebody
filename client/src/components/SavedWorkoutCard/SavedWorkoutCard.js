import React from "react";
import NewWorkoutButton from '../buttons/NewWorkoutButton/NewWorkoutButton'
import DeleteButton from '../buttons/DeleteButton/DeleteButton'

function SavedWorkoutCard({date, exercise, description, alternatives}) {
  return (
    <>
      <Card className="col-12 col-md-6">
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Exercise: 
          </Card.Subtitle>
          <Card.Text>
            {exercise}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Description: 
          </Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Alternative Exercises: 
          </Card.Subtitle>
          <Card.Text>
            {alternatives}
          </Card.Text>

          <NewWorkoutButton />
          <DeleteButton />
        </Card.Body>
      </Card>
    </>
  );
}

export default SavedWorkoutCard;
