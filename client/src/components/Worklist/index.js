// ------ Dependencies
import React from "react";
import { Row, Col } from "../Grid";
import { Accordion, Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import InputFormComponent from "../InputForm";
import { Image } from 'cloudinary-react';
import "./style.css";

// ------ Worklist Component
const Worklist = props => {
    return (props.patients_filtered.length === 0) ? (
        <div className="card worklistwhole">
            <div className="card-body">
                <div className="worklist">
                    <Row>
                        <Col size="8">
                            <h4>Worklist</h4>
                        </Col>
                        <Col size="4">
                            <InputFormComponent handleOnChange={props.handleOnChange}/>
                        </Col>
                    </Row>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <Row>
                                        <Col size="1">
                                            <i className="fas fa-user-plus fa-2x"></i>
                                        </Col>
                                        <Col size="6">
                                            <h5>New Patient</h5>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Row>
                                        <Col size="5">
                                            <input 
                                                className="form-control"
                                                type="text"
                                                name="newPatientF"
                                                placeholder="First Name..."
                                                value={props.newPatientFirst}
                                                onChange={props.handleNewPatientFirst}
                                            />
                                        </Col>
                                        <Col size="5">
                                            <input 
                                                className="form-control"
                                                type="text"
                                                name="newPatientL"
                                                placeholder="Last Name..."
                                                value={props.newPatientLast}
                                                onChange={props.handleNewPatientLast}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="5">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="newPatientImgURL"
                                                placeholder="Image URL..."
                                                value={props.newPatientImgURL}
                                                onChange={props.handleNewPatientImgURL}
                                            />
                                        </Col>
                                        <Col size="1">
                                            <h4>OR</h4>
                                        </Col>
                                        <Col size="5">
                                            <input 
                                                name="file" 
                                                type="file"
                                                className="file-upload" 
                                                onChange={props.uploadImg}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="8">
                                            <FormControl 
                                                as="textarea"  
                                                rows="2"
                                                cols="60"
                                                name="newPatientComment"
                                                placeholder="Comment..."
                                                value={props.newPatientComment}
                                                onChange={props.handleNewPatientComment}
                                            />
                                        </Col>
                                        <Col size="2">
                                            <Button block
                                                size="lg"
                                                className="createPatient"
                                                type="submit"
                                                onClick={props.handleSave}
                                            >
                                                <i className="fas fa-check-circle fa-2x"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    ) : (
        <div className="card worklistwhole">
            <div className="card-body">
                <div className="worklist">
                <   Row>
                        <Col size="8">
                            <h4>Worklist</h4>
                        </Col>
                        <Col size="4">
                            <InputFormComponent handleOnChange={props.handleOnChange}/>
                        </Col>
                    </Row>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <Row>
                                        <Col size="1">
                                            <i className="fas fa-user-plus fa-2x"></i>
                                        </Col>
                                        <Col size="6">
                                            <h5>New Patient</h5>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Row>
                                        <Col size="5">
                                            <input 
                                                className="form-control"
                                                type="text"
                                                name="newPatientF"
                                                placeholder="First Name..."
                                                value={props.newPatientFirst}
                                                onChange={props.handleNewPatientFirst}
                                            />
                                        </Col>
                                        <Col size="5">
                                            <input 
                                                className="form-control"
                                                type="text"
                                                name="newPatientL"
                                                placeholder="Last Name..."
                                                value={props.newPatientLast}
                                                onChange={props.handleNewPatientLast}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="5">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="newPatientImgURL"
                                                placeholder="Image URL..."
                                                value={props.newPatientImgURL}
                                                onChange={props.handleNewPatientImgURL}
                                            />
                                        </Col>
                                        <Col size="1">
                                            <h4>OR</h4>
                                        </Col>
                                        <Col size="5">
                                            <input 
                                                name="file" 
                                                type="file"
                                                className="file-upload" 
                                                onChange={props.uploadImg}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="8">
                                            <FormControl 
                                                as="textarea"  
                                                rows="2"
                                                cols="60"
                                                name="newPatientComment"
                                                placeholder="Comment..."
                                                value={props.newPatientComment}
                                                onChange={props.handleNewPatientComment}
                                            />
                                        </Col>
                                        <Col size="2">
                                            <Button block
                                                size="lg"
                                                className="createPatient"
                                                type="submit"
                                                onClick={props.handleSave}
                                            >
                                                <i className="fas fa-check-circle fa-2x"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {props.patients_filtered.map(patient => {
                        return (
                            <li className="list-group-item" key={patient._id} id={patient._id} draggable="true" onDragStart={props.drag}>
                                <Row id={patient._id}>
                                    <Col size="1">
                                        <Image cloudName="dqnwm3uoi" publicId={patient.cloudinary_id} width="50" height="50" crop="scale"/>
                                    </Col>
                                    <Col size="3">
                                        <h6>{patient.lastName}, {patient.firstName}</h6>
                                    </Col>
                                    <Col size="3">
                                        <h6>{patient.note}</h6>
                                    </Col>
                                    <Col id={patient._id} size="1">
                                        <Button
                                            id={patient._id} 
                                            className="fileButton"
                                            onClick={props.openFile}
                                        >
                                            <i id={patient._id} className="fas fa-file-medical"></i>
                                        </Button>
                                    </Col>
                                    <Col size="3">
                                        <Accordion>
                                                <Accordion.Toggle className="fileButton" as={Button} eventKey="0">
                                                    <i id={patient._id} className="fas fa-sticky-note"></i>
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
                                    <Col size="1">
                                        <Button  
                                            variant="outline-danger"
                                            id={patient._id}
                                            onClick={props.deletePatient}
                                        >
                                            <i id={patient._id} className="fas fa-trash-alt"></i>
                                        </Button>
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