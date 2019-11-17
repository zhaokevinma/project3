// ------ Import Router from Express
const router = require("express").Router();

// ------ db
const db = require("../models");

// ------ GET request to reach /test
router.get("/test", (req, res) => {
    res.send("Test route");
})

// ------ GET request to fetch patients
router.get("/api/patients", (req, res) => {
    db.Patient
        .find({})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
})

// ------ Export router
module.exports = router;