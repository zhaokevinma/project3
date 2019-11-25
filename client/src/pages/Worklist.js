// ------ Dependencies
import React, { Component } from "react";
import API from "../utils/API";
import { Row, Col, Container } from "../components/Grid";
// import { ButtonToolbar, Button } from 'react-bootstrap';
import WorklistComponent from "../components/Worklist";
import FolderComponent from "../components/Folder";
// import PatientModel from "../components/PatientModel";

// ------ Main
class Worklist extends Component {
    // ------ State contains an array of patient in db
    state = {
        temp: [],
        patients: [],
        patients_filtered: [],
        folders:[],
        searchTerm: "",
        newFolder: "",
        newPatientFirst: "",
        newPatientLast: "",
        modalShow: false,
        setModalShow: false
    };

    // ------ Handles modal new patient create input
    handleNewPatientFirst = event => {
        this.setState({ newPatientFirst: event.target.value });
    }

    handleNewPatientLast = event => {
        this.setState({ newPatientLast: event.target.value });
    }

    // ------ Handles new patient modal save button
    handleSave = event => {
        event.preventDefault();
        
        let newPatient = {
            lastName: this.state.newPatientLast,
            firstName: this.state.newPatientFirst
        };

        API.createPatient(newPatient)
            .then(this.grabPatients())
            .catch(err => console.log(err));
    }

    // ------ Render patients from db to state as soon as page loads
    componentDidMount() {
        // ------ Retrieve data and set state
        this.grabPatients();
        this.grabFolders();
    }

    // ------ grabPatients
    grabPatients() {
        API.getPatients()
            .then(res => this.setState({ 
                patients: res.data,
                patients_filtered: res.data
            }))
            .catch(err => console.log(err));
    }

    // ------ grab patient by id
    grab1Patient(id) {
        API.getPatient(id)
            .then(res => this.state.temp.push(res.data))
            .catch(err => console.log(err));
    }

    // ------ grabFolders
    grabFolders() {
        API.getFolders()
            .then(res => this.setState({
                folders: res.data
            }))
            .catch(err => console.log(err));
    }

    // ------ Handles user input for Searching Patient Name
    handleOnChange = event => {
        // ------ Set search 
        let searchTerm = event.target.value;
        console.log(searchTerm);
        this.setState( { searchTerm });
        // ------
        if (searchTerm === "") {
            this.grabPatients();
        } else {
            let filtered = this.state.patients.filter(function(patient) {
                let fullName = `${patient.firstName}${patient.lastName}`;
                if(fullName.toLowerCase().indexOf(searchTerm) === -1) {
                    return false;
                }
                return true;
            });
            console.log(filtered);
            console.log(this.state.patients);
            console.log(this.state.patients_filtered);
            this.setState({ patients_filtered: filtered});
        }
    }

    // ------ Handles user input tracking of new folder
    handleNewFolder = event => {
        let newFolder = event.target.value;
        console.log(newFolder);
        this.setState({ newFolder });
    }

    // ------ Create new folder -> db
    handleCreateFolder = event => {
        event.preventDefault();

        let folder = {
            folderName: this.state.newFolder,
            patients: []
        };

        API.createFolder(folder)
            .then(this.grabFolders())
            .catch(err => console.log(err.response))
    }

    // ------ Handle folder onClick filtering
    folderFilter = event => {
        event.preventDefault();
        
        const folder_id = event.target.key || event.target.id;
        if(folder_id === "all") {
            this.grabPatients();
        } else {
            let filtered = this.state.folders.filter(function(folder) {
                if(folder._id === folder_id) {
                    return true;
                }
                return false;
            })
            console.log(filtered[0]);
            console.log(filtered[0].patients);
            let folderPatients = filtered[0].patients;

            let further_filter = this.state.patients.filter(function(patient) {
                return folderPatients.indexOf(patient._id) > -1;
            })

            this.setState({ patients_filtered: further_filter });
        }
    }

    // ------ When medical file button is clicked
    openFile = event => {
        event.preventDefault();
        console.log("Clicked");
        window.open("https://www.w3schools.com");
    }

    // ------ Render
    render() {
        return (
            <Container fluid className="container">
                {/* <Row>
                    <ButtonToolbar>
                        <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>
                            <h5>Create new patient</h5>
                        </Button>

                        <PatientModel 
                            show={this.state.modalShow}
                            onHide={() => this.setState({ modalShow: false })}
                            handleNewPatientFirst={this.handleNewPatientFirst}
                            handleNewPatientLast={this.handleNewPatientLast}
                            handleSave={this.handleSave}
                        />
                    </ButtonToolbar>
                </Row> */}
                <Row>
                    <Col size="3">
                        <FolderComponent
                            patients={this.state.patients} 
                            grabPatients={this.grabPatients}
                            folders={this.state.folders}
                            handleNewFolder={this.handleNewFolder}
                            handleCreateFolder={this.handleCreateFolder}
                            folderFilter={this.folderFilter}
                        />
                    </Col>
                    <Col size="9">
                        <WorklistComponent 
                            patients_filtered={this.state.patients_filtered} 
                            searchTerm={this.state.searchTerm}
                            handleOnChange={this.handleOnChange}
                            handleNewPatientFirst={this.handleNewPatientFirst}
                            handleNewPatientLast={this.handleNewPatientLast}
                            handleSave={this.handleSave}
                            openFile={this.openFile}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

// ------ Export
export default Worklist