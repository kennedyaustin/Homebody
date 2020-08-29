import React from 'react'

const MuscleTargetCard = ({target}) => {

    return (
        <div className="card rounded mt-4">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{target}</h5>
            </div>
        </div>    
    )
}

export default MuscleTargetCard