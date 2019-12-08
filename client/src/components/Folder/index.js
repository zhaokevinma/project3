// ------ Dependencies
import React from "react";
import { Accordion, Card, Button, Badge } from 'react-bootstrap'
import { Row, Col} from "../Grid";
import "./style.css";

// ------ Folder
const Folder = props => {
    return (
        <div className="card folderwhole">
            <div className="card-body">
                <div className="folder">
                    <h4>Folders</h4>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <Row>
                                    <Col size="2">
                                        <i className="fas fa-folder-plus fa-2x"></i>
                                    </Col>
                                    <Col size="6">
                                        <h5>New folder</h5>
                                    </Col>
                                </Row>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        name="newFolder"
                                        placeholder="Folder Name..."
                                        value={props.newFolder}
                                        onChange={props.handleNewFolder}
                                    />
                                <Button block
                                    className="createFolder"
                                    type="submit"
                                    onClick={props.handleCreateFolder}
                                >
                                    <i className="fas fa-check-circle"></i>
                                </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <li className="list-group-item">
                        <Row>
                            <Col size="7">
                                <h6 id="all" onClick={props.folderFilter}>All</h6>
                            </Col>
                            <Col size="2">
                                <h5>
                                    <Badge variant="secondary">
                                        {props.patients.length}
                                    </Badge>
                                </h5>
                            </Col>
                        </Row>
                    </li>
                    {props.folders.map(folder => {
                        return (
                            <li className="list-group-item" 
                                key={folder._id} 
                                id={folder._id}  
                                onDrop={props.drop} 
                                onDragOver={props.allowDrop}
                            >
                                <Row id={folder._id}>
                                    <Col size="7">
                                        <h6 id={folder._id} onClick={props.folderFilter}>{folder.folderName}</h6>
                                    </Col> 
                                    <Col size="2">
                                        <h5>
                                            <Badge variant="secondary">
                                                {folder.patients.length}
                                            </Badge>
                                        </h5>
                                    </Col>
                                    <Col size="2">
                                        <Button 
                                            size="sm" 
                                            variant="outline-danger"
                                            id={folder._id}
                                            onClick={props.deleteFolder}
                                        >
                                            <i id={folder._id} className="fas fa-trash-alt"></i>
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
export default Folder;
