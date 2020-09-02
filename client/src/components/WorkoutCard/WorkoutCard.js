import React from 'react'

function WorkoutCard() {

    return (
        <div className="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div className="card-header">You Workout From {/* date/time of submit button click */}</div>
            <div className="card-body">
                {/* map over global hook, targets.workout for the following */}
                <h5 className="card-title">Exercise Name</h5>
                <p className="card-text">Exercise Description goes here.</p>
                <small>Alternatives: </small>
            </div>
        </div>
    )
}

export default WorkoutCard