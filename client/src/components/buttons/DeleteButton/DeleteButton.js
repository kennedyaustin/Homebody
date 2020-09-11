import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import BodyContext from '../../../utils/BodyContext';
import API from '../../../utils/API';
import ConfirmDeleteModal from '../../ConfirmDeleteModal/ConfirmDeleteModal';
import { Button } from 'react-bootstrap';

const DeleteButton = ({id}) => {

    const { workout, userState } = useContext(BodyContext)
    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = e => {
        setModalShow(true)
    }

    return (
        <>
            <ConfirmDeleteModal 
            id={id}
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            <Button className="btn btn-danger btn-md ml-2" onClick={handleClick}>
                Delete Workout
                <img
                    className="mb-1 pl-1"
                    src="/arrow-203.png"
                    alt="Delete Workout"
                />
            </Button>
        </>
    )
}

export default DeleteButton