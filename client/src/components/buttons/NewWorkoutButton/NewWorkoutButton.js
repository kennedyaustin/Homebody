import React from 'react'
import { Link } from "react-router-dom";

/* Loads on both WorkoutCard and SavedWorkoutCard components.
Allows user to create a new workout by sending them to the home page. */

const NewWorkoutButton = () => {
    return (
        <Link className="btn btn-danger btn-md mr-2" to="/home">
            <img
                className="mb-1 pr-1"
                src="/arrow-204.png" 
                alt="New Workout"
                />
            Create Workout
        </Link>
    )
}

export default NewWorkoutButton