import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import BodyContext from '../../../utils/BodyContext';
import API from '../../../utils/API';

/* This component appears on the WorkoutCard component once a user has clicked the SubmitButton.
When the SaveButton is clicked, the handleSave method calls the createWorkout API function. */

const SaveButton = () => {

    const { workout, userState } = useContext(BodyContext)

    const handleSave = e => {
        const userId = userState._id
        const n = workout.length
        const workoutBody = []
        for (let i=0; i < n; i++){
            workoutBody.push(workout[i]._id)
        }
        API.createWorkout(workoutBody)
        .then()
        .catch(err => console.log(err))
    }

    return (
        <a className="btn btn-secondary btn-md ml-2" onClick={handleSave} href="/home/profile">
            Save Workout
            <img
                className="mb-1 pl-1"
                src="/arrow-203.png" 
                alt="Save Workout"
                />
        </a>
    )
}

export default SaveButton