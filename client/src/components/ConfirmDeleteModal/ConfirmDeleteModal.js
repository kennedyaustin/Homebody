import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function ConfirmDeleteModal(props) {
    return (

        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='container-fluid text-danger text-center'
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <h3>Delete Workout?</h3>
                <p className="mt-3">
                    This action can not be undone! Are you sure you want to permanently delete this workout?
                </p>
            </Modal.Body>
            <Modal.Footer className="row d-flex justify-content-center text-center">
                <div className="col-10 col-md-8 offset-1 offset-md-2 row">
                    <div className="col-6">
                        <Button className="btn btn-danger" onClick={() => console.log(props.id)}>Delete</Button>
                    </div>
                    <div className="col-6">
                        <Button className="btn btn-primary" onClick={props.onHide}>Close</Button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmDeleteModal