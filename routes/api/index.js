// ------ Dependencies
const router = require("express").Router();
const patientRoutes = require("./patients");

// ------ Direct to patients
router.use("/patients", patientRoutes);

// ------ Export
module.exports = router;