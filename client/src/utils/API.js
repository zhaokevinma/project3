// ------ Dependencies
import axios from "axios"

// ------ GET requests
export default {
    getPatients: function() {
        return axios.get("/api/patients");
    },
    getFolders: function() {
        return axios.get("api/folders");
    }
}