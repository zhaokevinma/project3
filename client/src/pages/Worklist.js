// ------ Dependencies
import React, { Component } from "react";
import API from "../utils/API";
import { Row, Col, Container } from "../components/Grid";
import WorklistComponent from "../components/Worklist";
import FolderComponent from "../components/Folder";

// ------ Main
class Worklist extends Component {
    // ------ State contains an array of patient in db
    state = {
        temp: [],
        patients: [],
        patients_filtered: [],
        folders:[],
        searchTerm: "",
        newFolder: ""
    };

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

    // ------ Handles user input for Last Name
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

    // ------ Render
    render() {
        return (
            <Container fluid className="container">
                <Row>
                    <Col size="3">
                        <FolderComponent 
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
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

// ------ Export
export default Worklist