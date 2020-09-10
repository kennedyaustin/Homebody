import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import BodyContext from '../../../utils/BodyContext';
import API from '../../../utils/API';

const DeleteButton = () => {

    const { workout, userState } = useContext(BodyContext)

    const handleDelete = e => {
        
        console.log('Deleted')
    }

    return (
        <Link className="btn btn-danger btn-md ml-2" onClick={handleDelete} to="/profile">
            Delete Workout
            <img
                className="mb-1 pl-1"
                src="/arrow-203.png" 
                alt="Delete Workout"
                />
        </Link>
    )
}

export default DeleteButton