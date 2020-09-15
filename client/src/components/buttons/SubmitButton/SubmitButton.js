import React, { useContext, useState, useEffect } from "react";
import BodyContext from "../../../utils/BodyContext";
import API from '../../../utils/API'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

/* Loads on the home page, disabled unless the user makes at least one selection.
Generates workout based on user's selection. */

function SubmitButton() {

    const { targets, setWorkout, setTargets } = useContext(BodyContext);
    const [selectedState, updateSelected] = useState(false)
    const history = useHistory();


    // toggle submit button deactivation based on targets hook
    useEffect(() => {
        (async () => {
            if (targets.options[0].selected || targets.options[1].selected || targets.options[2].selected || targets.options[3].selected) {
                updateSelected(true)
            } else {
                updateSelected(false)
            }
        })()

    }, [targets])

    // function for a single target query
    const oneTarget = data => {
        setWorkout( data )
    }

    // function for a two target query
    const twoTargets = (data, targetArr) => {
        let countOne = 0
        let countTwo = 0
        let n = data.length
        let workoutArr = []

        for (let i = 0; i < n; i++) {
            if (data[i].target === targetArr[0] && countOne < 3) {
                workoutArr.push(data[i])
                countOne++
            } else if (data[i].target === targetArr[1] && countTwo < 3) {
                workoutArr.push(data[i])
                countTwo++
            }
        }
        setWorkout(workoutArr)
    }

    // function for three target query
    const threeTargets = (data, targetArr) => {
        let countOne = 0
        let countTwo = 0
        let countThree = 0
        let n = data.length
        let workoutArr = []

        for (let i = 0; i < n; i++) {
            if (data[i].target === targetArr[0] && countOne < 2) {
                workoutArr.push(data[i])
                countOne++
            } else if (data[i].target === targetArr[1] && countTwo < 2) {
                workoutArr.push(data[i])
                countTwo++
            } else if (data[i].target === targetArr[2] && countThree < 2) {
                workoutArr.push(data[i])
                countThree++
            }
        }
        setWorkout(workoutArr)
    }

    // function for four target query
    const fourTargets = (data, targetArr) => {
        let countOne = 0
        let countTwo = 0
        let countThree = 0
        let countFour = 0
        let n = data.length
        let workoutArr = []

        for (let i = 0; i < n; i++) {
            if (data[i].target === targetArr[0] && countOne < 2) {
                workoutArr.push(data[i])
                countOne++
            } else if (data[i].target === targetArr[1] && countTwo < 2) {
                workoutArr.push(data[i])
                countTwo++
            } else if (data[i].target === targetArr[2] && countThree < 2) {
                workoutArr.push(data[i])
                countThree++
            } else if (data[i].target === targetArr[3] && countFour < 2) {
                workoutArr.push(data[i])
                countFour++
            }
        }
        setWorkout(workoutArr)
    }

    // on submit button click
    const handleSubmit = e => {
        let targetArr = []
        for (let i = 0; i < 4; i++) {
            if (targets.options[i].selected) {
                targetArr.push(targets.options[i].name.toLowerCase())
            }
        }
        API.getExerciseByTarget(targetArr)
        .then(results => {
            let data = results.data
            for (let i = data.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * i)
                const temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }
            switch (targetArr.length) {
                case 1:
                    oneTarget(data)
                    history.push('/home/workout')
                    break;
                case 2:
                    twoTargets(data, targetArr)
                    history.push('/home/workout')
                    break;
                case 3:
                    threeTargets(data, targetArr)
                    history.push('/home/workout')
                    break;
                case 4:
                    fourTargets(data, targetArr)
                    history.push('/home/workout')
                    break;
                default:
                    console.log('Something went wrong.')
            }
            setTargets({...targets, options: targets.options.map(option => {
                option.selected = false;
                return option;
            })})
        })
        .catch(err => console.log(err))
    }

    return (

        !selectedState ? (
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip className="tooltip-light" id="tooltip-disabled">Select One or More Category From Above</Tooltip>}
        > 
            <span className="d-inline-block">
                <Button className="btn btn-danger btn-lg" type="button" disabled={!selectedState} style={{ pointerEvents: 'none' }} onClick={handleSubmit}>
                    Create My Workout
                </Button>
            </span>
            {/* <button type="button" className="btn btn-danger btn-lg" disabled={!selectedState} onClick={handleSubmit}>Create My Workout</button> */}
        </OverlayTrigger>
        ) : 
        (
            <span className="d-inline-block">
                <Button className="btn btn-danger btn-lg" type="button" disabled={!selectedState} onClick={handleSubmit}>
                    Create My Workout
                </Button>
            </span>
        )
    )
}

export default SubmitButton