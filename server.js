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

// ------ Serve static assets
if (process.env.NODE_ENV === "production") {
    console.log("Static folder:", path.join(__dirname, "/client/build/static"));
    app.use("/static", express.static(path.join(__dirname, "/client/build/static")));
}

// ------ This needs to be after serving static assets
app.use(require("./routes"));

// ------ Express error handler
app.use(function(err, req, res, next) {
    console.log(err.static);
    res.status(500);
})

// ------ Connect to Database and start server
mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
app.listen(PORT, function() {
    console.log(`------ App running on port ${PORT} ------`);
});