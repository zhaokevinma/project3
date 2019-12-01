// ------ Dependencies
import React from "react";
import { Row, Col } from "../Grid";
import { Accordion, Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import InputFormComponent from "../InputForm";
import "./style.css";

// ------ Worklist Component
const Worklist = props => {
    return (props.patients_filtered.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="worklist">
                    <h4>Worklist</h4>
                    <InputFormComponent handleOnChange={props.handleOnChange}/>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <Row>
                                        <Col size="3">
                                            <i className="fas fa-user-plus fa-2x"></i>
                                        </Col>
                                        <Col size="6">
                                            <h4>Create patient</h4>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
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
                                    <Button block
                                        className="createPatient"
                                        type="submit"
                                        onClick={props.handleSave}
                                    >
                                    <i className="fas fa-check-circle"></i>
                                    </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body">
                <div className="worklist">
                    <h4>Worklist</h4>
                    <InputFormComponent handleOnChange={props.handleOnChange}/>

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <Row>
                                        <Col size="3">
                                            <i className="fas fa-user-plus fa-2x"></i>
                                        </Col>
                                        <Col size="6">
                                            <h4>Create patient</h4>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
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
                                    <Button block
                                        className="createPatient"
                                        type="submit"
                                        onClick={props.handleSave}
                                    >
                                        <i className="fas fa-check-circle"></i>
                                    </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {props.patients_filtered.map(patient => {
                        return (
                            <li className="list-group-item" key={patient._id}>
                                <Row id={patient._id + "Card"}>
                                    <Col size="4">
                                        <h5>{patient.lastName}, {patient.firstName}</h5>
                                    </Col>
                                    <Col size="4">
                                        <h6>{patient.note}</h6>
                                    </Col>
                                    <Col id={patient._id} size="1">
                                        <Button
                                            id={patient._id} 
                                            className="fileButton"
                                            onClick={props.openFile}
                                        >
                                            <h5 id={patient._id}><i id={patient._id} className="fas fa-file-medical"></i></h5>
                                        </Button>
                                    </Col>
                                    <Col size="3">
                                        <Accordion>
                                                <Accordion.Toggle className="fileButton" as={Button} eventKey="0">
                                                    <h5 id={patient._id}>
                                                        <i id={patient._id} className="fas fa-sticky-note"></i>
                                                    </h5>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <InputGroup>
                                                        <FormControl
                                                            as="textarea"
                                                            placeholder={patient.note || "comment..."}
                                                            name="comment"
                                                            value={props.comment}
                                                            onChange={props.handleComment}
                                                        />
                                                        <InputGroup.Append>
                                                            <Button 
                                                                id={patient._id}
                                                                variant="primary" 
                                                                className="fileButton"
                                                                onClick={props.handleSaveComment}
                                                            >
                                                                Save
                                                            </Button>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </Accordion.Collapse>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

// ------ Export
export default Worklist