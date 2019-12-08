// ------ Mongoose Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This line is to resolve the following deprecation warning 
// "DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.""
mongoose.set('useCreateIndex', true);

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