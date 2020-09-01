import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import API from '../../utils/API'

function SubmitButton() {

    const { targets, setTargets } = useContext(BodyContext);

    const handleSubmit = e => {
        let targetArr = []
        for (let i = 0; i < 4; i++){
            if (targets[i].selected){
                targetArr.push(targets[i].name)
            }
        }
        API.getExerciseByTarget({target: targetArr})
        .then(results => console.log(results))
    }

    return (
        <div>

            <button type="button" className="btn btn-danger btn-lg" onClick={handleSubmit}>Create My Workout</button>

        </div>
    )
}

export default SubmitButton