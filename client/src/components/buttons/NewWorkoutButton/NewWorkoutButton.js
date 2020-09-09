import React from 'react'
import { Link } from "react-router-dom";


const NewWorkoutButton = () => {
    return (
        <Link className="btn btn-danger btn-md mr-2" to="/home">
            <img
                className="mb-1 pr-1"
                src="/arrow-204.png" 
                alt="New Workout"
                />
            New Workout
        </Link>
    )
}

export default NewWorkoutButton