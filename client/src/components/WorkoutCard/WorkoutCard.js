import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import BodyContext from "../../utils/BodyContext";
import NewWorkoutButton from "../buttons/NewWorkoutButton/NewWorkoutButton";
import SaveButton from "../buttons/SaveButton/SaveButton";


function WorkoutCard() {

    const { workout } = useContext(BodyContext)

    // ----------
    // When refreshed, workout disappears from the workout "Page"
    // ----------
    return (
        <>
            <Card
                className="mt-5 col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
                text="light"
                style={{ backgroundColor: '#1a1a1a' }}
            >
                <Card.Body>
                    <Card.Title className="text-center font-weight-bold">
                        <h1>
                            Your Workout
                        </h1>
                    </Card.Title>
                    {workout.map(w => {
                        return (
                            <div key={w.exerciseName}>
                                <Card.Subtitle className="text-muted text-center">
                                    <div className="mt-4 text-light">
                                        <h3>Exercise: </h3>
                                        <br />
                                        <h5>{w.exerciseName}</h5>
                                    </div>
                                </Card.Subtitle>

                                <Card.Text className="text-muted mt-4 text-center">
                                    {/* style for spacing/line at bottom */}
                                    <div style={{ borderBottom: '1px solid #333232', paddingBottom: '20px' }}>

                                        <div className="text-light">
                                            Description: <br />
                                        </div>
                                        {w.exerciseInfo} <br />
                                        <div className="mt-4 text-light">
                                            Alternative Exercies: <br />
                                        </div>

                                        <Card.Text className="">
                                            {w.alternatives.join(', ')}
                                        </Card.Text>
                                    </div>
                                </Card.Text>
                            </div>
                        )
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
