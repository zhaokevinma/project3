// ------ Mongoose Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ------ Patient Schema
const PatientSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    }
});

const Patient = mongoose.model("Patient", PatientSchema);

// ------ Export
module.exports = Patient;