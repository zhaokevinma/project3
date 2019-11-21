// ------ Dependencies
import React from "react";
import { Modal, Button } from 'react-bootstrap';

// ------ Model
function PatientModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                New Patient
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <input 
                className="form-control"
                type="text"
                name="newPatientF"
                placeholder="First Name..."
                value={props.newPatientFirst}
                onChange={props.handleNewPatientFirst}
            />
            <input 
                className="form-control"
                type="text"
                name="newPatientL"
                placeholder="Last Name..."
                value={props.newPatientLast}
                onChange={props.handleNewPatientLast}
            />
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={props.handleSave}>Save</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

// ------ Export
export default PatientModal;