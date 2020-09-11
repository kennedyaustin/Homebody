import React from 'react'
import ConfirmDeleteModal from '../../ConfirmDeleteModal/ConfirmDeleteModal';
import { Button } from 'react-bootstrap';

const DeleteButton = ({id}) => {

    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = e => {
        return (
            setModalShow(true)
        )
    }

    return (
        <>
            <ConfirmDeleteModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={id}
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