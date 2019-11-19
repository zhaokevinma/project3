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
        lastNameInput: "",
        firstNameInput: "",
        patients: []
    };

    // ------ Render patients from db to state as soon as page loads
    componentDidMount() {
        // ------ Retrieve data and set state
        API.getPatients()
            .then(res => this.setState({ patients: res.data }))
            .catch(err => console.log(err))
    }

    // ------ Handles user input for Last Name
    handleLastNameInput = event => {
        this.setState( { lastNameInput: event.target.value })
    }

    // ------ Handles user Input for First Name
    handlefirstNameInput = event => {
        this.setState( { firstNameInput: event.target.value })
    }

    // ------ Handles form submit in input form component
    handleFormSubmit = event => {
        // ------ Do not refresh the page
        event.preventDefault();
        // ------- logging
        console.log(this.state.patients);
        // // ------ Define newPatient
        // let newPatient = {
        //     "lastName" : lastNameInput,
        //     "firstName" : firstNameInput
        // }
        // // ------ Upon Click, API.getPatients brings data from db
        // API.createPatient(newPatient)
        //     .then (res => this.setState({ patients:res.data }))
        //     .catch(err => console.log(err))
    }

    // ------ Render
    render() {
        return (
            <Container fluid className="container">
                <Row>
                    <Col size="3">
                        <FolderComponent />
                    </Col>
                    <Col size="9">
                        <WorklistComponent 
                            patients={this.state.patients} 
                            handleLastNameInput={this.handleLastNameInput}
                            handlefirstNameInput={this.handlefirstNameInput}
                            handleFormSubmit={this.handleFormSubmit}
                            />
                    </Col>
                </Row>
            </Container>
        )
    }
}

// ------ Export
export default Worklist