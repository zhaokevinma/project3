// ------ Dependencies
import axios from "axios"

// ------ GET requests
export default {
    getPatients: function() {
        return axios.get("/api/patients");
    },
    getPatient: function(id) {
        return axios.get("/api/patients/" + id);
    },
    getFolders: function() {
        return axios.get("api/folders");
    },
    getFolder: function(id) {
        return axios.get("/api/folders/" + id);
    },
    createFolder: function(newFolder) {
        return axios.post("/api/folders", newFolder);
    }
}