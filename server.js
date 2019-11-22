// ------ Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// ------ Environmental variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project3";

// ------ Create app and define middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes"));

// ------ Serve static assests
if (process.env.NODE_ENV === "production") {
    console.log("Static folder:", path.join(__dirname, "/client/build"));
    app.use("/static", express.static(path.join(__dirname, "/client/build")));
}

// ------ Express error handler
app.use(function(err, req, res, next) {
    console.log(err.static);
    res.status(500);
})

// ------ Connect to Database and start server
mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true});
app.listen(PORT, function() {
    console.log(`------ App running on port ${PORT} ------`);
});