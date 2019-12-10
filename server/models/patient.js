// ------ Mongoose Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This line is to resolve the following deprecation warning 
// "DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.""
mongoose.set('useCreateIndex', true);

// ------ Patient Schema
const PatientSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    cloudinary_id: {
        type: String,
    },
    imageURL: {
        type: String
    },
    note: {
        type: String
    }
});

const Patient = mongoose.model("Patient", PatientSchema);

// ------ Export
module.exports = Patient;