import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import BodyContext from '../../../utils/BodyContext';
import API from '../../../utils/API';

const SaveButton = () => {

    const { workout, userState } = useContext(BodyContext)

    const handleSave = e => {
        const userId = userState._id
        const n = workout.length
        const workoutBody = []
        for (let i=0; i < n; i++){
            workoutBody.push(workout[i]._id)
        }
        API.createWorkout(userId, workoutBody)
        .then(results => console.log(results))
        
    }

    return (
        <Link className="btn btn-secondary btn-md ml-2" onClick={handleSave} to="/profile">
            Save Workout
            <img
                className="mb-1 pl-1"
                src="/arrow-203.png" 
                alt="Save Workout"
                />
        </Link>
    )
}

export default SaveButton