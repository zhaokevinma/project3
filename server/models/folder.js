// ------ Mongoose Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ------ Patient Schema
const FolderSchema = new Schema({
    folderName: {
        type: String,
        required: true
    },
    patients: [{
        type: Schema.Types.ObjectId,
        ref: "Patient"
    }]
});

const Folder = mongoose.model("Folder", FolderSchema);

// ------ Export
module.exports = Folder;