import React from "react";
import NewWorkoutButton from '../buttons/NewWorkoutButton/NewWorkoutButton'
import DeleteButton from '../buttons/DeleteButton/DeleteButton'
import { Card } from "react-bootstrap";
import dayjs from 'dayjs'

function SavedWorkoutCard({ date, exercises }) {
  return (
    <>
      <Card className="col-12 col-md-6 col-lg-5 bg-dark text-light m-lg-4 my-md-4">
        <Card.Body>
          <Card.Title>{'Created on ' + dayjs(date).format('MM/DD/YYYY') + ' at ' + dayjs(date).format('hh:mm a')}</Card.Title>
          <Card.Title>{}</Card.Title>
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
          <div className="row no-gutters d-flex justify-content-center">
            <div className="col-6">
              <NewWorkoutButton />
            </div>
            <div className="col-6">
              <DeleteButton />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SavedWorkoutCard;
