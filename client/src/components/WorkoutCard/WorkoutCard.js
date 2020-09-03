import React, {useContext} from "react";
import Card from 'react-bootstrap/Card'
import BodyContext from "../../utils/BodyContext";
import { Link, useHistory } from "react-router-dom";


function WorkoutCard() {

    const {workout} = useContext(BodyContext)

    return (
        <>
        <Card
            bg="dark"
            text="light"
            style={{ width: "18rem" }}
        >
        <Card.Body>
            <Card.Title>Your Workout</Card.Title>
            {workout.map(w => {
                return (
                    <>
                        <Card.Subtitle className="mb-2 text-muted">{w.exerciseName}</Card.Subtitle>
                        <Card.Text>{w.exerciseInfo}</Card.Text>
                        {w.alternatives.map(a => 
                            (<Card.Text>{a}</Card.Text>)
                        )}
                    </>
                )
            })}
    
            <Link className= "btn btn-danger btn-lg" to="/">
                <img 
                className= "mb-1" 
                src="https://img.icons8.com/metro/15/000000/back.png"/>
                New Workout
            </Link>
            <Link className= "btn btn-secondary btn-lg" to="/profile">
                {/* Flip this image */}
                <img
                className= "mb-1 arrowDirection"
                src="https://img.icons8.com/metro/15/000000/back.png"/>
                Save Workout
            </Link>
        </Card.Body>
        </Card>
        </>
    );
}

export default WorkoutCard;
