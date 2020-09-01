import React, { useContext, useState, useEffect } from "react";
import BodyContext from "../../utils/BodyContext";
import API from '../../utils/API'

function SubmitButton() {

    const { targets, setTargets } = useContext(BodyContext);
    const [ selectedState, updateSelected ] = useState(false)

    useEffect(() => {
     (async () => {
         if (targets.options[0].selected || targets.options[1].selected || targets.options[2].selected || targets.options[3].selected){
            updateSelected(true)
        } else {
            updateSelected(false)
        }
     })()
        
    }, [targets])
    

    const handleSubmit = e => {
        let targetArr = []
        for (let i = 0; i < 4; i++){
            if (targets.options[i].selected){
                targetArr.push(targets.options[i].name.toLowerCase())
            }
        }
        API.getExerciseByTarget(targetArr)
        .then(results => console.log(results))
    }

    return (
        <div>

            <button type="button" className="btn btn-danger btn-lg" disabled={!selectedState} onClick={handleSubmit}>Create My Workout</button>

        </div>
    )
}

export default SubmitButton