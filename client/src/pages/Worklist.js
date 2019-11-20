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
        patients: [],
        patients_filtered: [],
        folders:[],
        searchTerm: ""
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
                if (fullName.toLowerCase().indexOf(searchTerm) === -1) {
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

    // ------ Render
    render() {
        return (
            <Container fluid className="container">
                <Row>
                    <Col size="3">
                        <FolderComponent 
                            folders={this.state.folders}
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