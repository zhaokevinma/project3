// ------ Dependencies
import React from "react";
import { Row, Col } from "../Grid";
import InputFormComponent from "../InputForm";

// ------ Component
const Worklist = props => {

    return (props.patients_filtered.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="worklist">
                    <h4>Worklist</h4>
                    <InputFormComponent handleOnChange={props.handleOnChange}/>
                </div>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body">
                <div className="worklist">
                    <h4>Worklist</h4>
                    <InputFormComponent handleOnChange={props.handleOnChange}/>
                    {props.patients_filtered.map(patient => {
                        return (
                            <li className="list-group-item" key={patient._id}>
                                <Row id={patient._id + "Card"}>
                                    <Col size="5">
                                        <h5>{patient.lastName}, {patient.firstName}</h5>
                                    </Col>
                                    <Col size="2">
                                        <h5><i className="fas fa-file-medical"></i></h5>
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