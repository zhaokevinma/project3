// ------ Dependencies
import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import WorklistComponent from "../components/Worklist";

// ------ Main
class Worklist extends Component {
    // ------ State contains an array of patient in db
    state = {
        patients: []
    };

    // ------ Render patients from db to state as soon as page loads
    componentDidMount() {
        // ------ Retrieve data and set state
        API.getPatients()
            .then(res => this.setState({ patients: res.data }))
            .catch(err => console.log(err))
    }

    // ------ Render
    render() {
        return (
            <Container fluid className="container">
                <WorklistComponent patients={this.state.patients} />
            </Container>
        )
    }
}

// ------ Export
export default Worklist