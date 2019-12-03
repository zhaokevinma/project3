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
    createPatient: function(newPatient) {
        return axios.post("/api/patients", newPatient);
    },
    updatePatientComment: function(id, comment) {
        return axios.post("/api/patients/" + id, comment);
    },
    deletePatient: function (id) {
        return axios.delete("/api/patients/" + id);
    },
    getFolders: function() {
        return axios.get("api/folders");
    },
    getFolder: function(id) {
        return axios.get("/api/folders/" + id);
    },
    createFolder: function(newFolder) {
        return axios.post("/api/folders", newFolder);
    },
    updateFolderPatient: function(id, patient) {
        return axios.post("/api/folders/" + id, patient);
    },
    deleteFolder: function (id) {
        return axios.delete("/api/folders/" + id);
    }
}