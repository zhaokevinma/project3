// ------ Dependencies
const router = require("express").Router();
const patientsController = require("../../controllers/patientsController");

// ------ All
router.route("/")
    .get(patientsController.findAll)
    .post(patientsController.create);
    
// ------ Export
module.exports = router;