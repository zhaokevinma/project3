// ------ Dependencies
const router = require("express").Router();
const patientsController = require("../../controllers/patientsController");

// ------ All
router.route("/")
    .get(patientsController.findAll);
    
// ------ Export
module.exports = router;