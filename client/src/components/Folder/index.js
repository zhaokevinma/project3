// ------ Dependencies
import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap'

// ------ Folder
const Folder = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="folder">
                    <h4>Folders</h4>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <i className="fas fa-folder-plus fa-2x"></i>
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
                                <Button 
                                    type="submit"
                                    onClick={props.handleCreateFolder}
                                >
                                    <i className="fas fa-check-circle"></i>
                                </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {props.folders.map(folder => {
                        return (
                            <li className="list-group-item" key={folder._id}>
                                <h5 id={folder._id} onClick={props.folderFilter}>{folder.folderName} {folder.patients.length}</h5>
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
