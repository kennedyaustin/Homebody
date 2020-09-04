import React, {useContext} from "react";
import Card from 'react-bootstrap/Card'
import BodyContext from "../../utils/BodyContext";
import { Link, useHistory } from "react-router-dom";


function WorkoutCard() {

    const {workout} = useContext(BodyContext)

    // ----------
    // Push workouts have duplicate "Alternative Name" for "Decline Pushups"
    // ----------
    // When refreshed, workout disappears from the workout "Page"
    // ----------
    return (
        <>
        <Card
            className= "mt-5 col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
            text="light"
            style={{ backgroundColor: '#1a1a1a' }}
        >
        <Card.Body>
            <Card.Title className= "text-center font-weight-bold">
                Your Workout
            </Card.Title>
            {workout.map(w => {
                return (
                    <>
                        <Card.Subtitle className="text-muted text-center">
                            <div className= "mt-4 text-light">
                              Exercise: <br />
                            </div>
                            {w.exerciseName}
                        </Card.Subtitle>

                        <Card.Text className= "text-muted mt-4 text-center">
                            {/* style for spacing/line at bottom */}
                            <div style= {{ borderBottom: '1px solid #333232', paddingBottom: '20px'}}>

                                <div className= "text-light">
                                  Description: <br />
                                </div>
                                {w.exerciseInfo} <br />
                                <div className= "mt-4 text-light">
                                    Alternative Exercies: <br />
                                </div>

                                {w.alternatives.map(a => 
                                (<Card.Text className= "">
                                    {a}
                                </Card.Text>)
                                )}
                                
                            </div>
                        </Card.Text>
                    </>
                )
            })}
    
            <div className= "container">
                <div className= "d-flex justify-content-center">
                    <Link className= "btn btn-danger btn-md mr-2" to="/">
                        New Workout
                        <img 
                        className= "mb-1 pl-1" 
                        src="/arrow-204.png"/>
                    </Link>
                    <Link className= "btn btn-secondary btn-md ml-2" to="/profile">
                        Save Workout
                        <img
                        className= "mb-1 pl-1"
                        src="/arrow-203.png"/>
                    </Link>
                </div>
            </div>
        </Card.Body>
        </Card>
        </>
    );
}

export default WorkoutCard;
