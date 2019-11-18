// ------ Dependencies
import React from "react";
import {Row, Col} from "../Grid";

// ------ Component
const Worklist = props => {
    return (props.patients.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="worklist">
                    <h4>Worklist</h4>
                </div>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body">
                <div className="worklist">
                    <h4>Worklist</h4>
                    {props.patients.map(patient => {
                        return (
                            <li className="list-group-item">
                                <Row id={patient.lastName + "Card"} key={patient._id}>
                                    <Col size="2">
                                        <h5>{patient.lastName}</h5>
                                    </Col>
                                    <Col size="2">
                                        <h5>{patient.firstName}</h5>
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