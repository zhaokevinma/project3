// ------ Dependencies
import axios from "axios"

// ------ GET requests
export default {
    getPatients: function() {
        return axios.get("/api/patients");
    },
    createPatient: function(NewPatient) {
        return axios.post("./api/patients", NewPatient);
    }
}