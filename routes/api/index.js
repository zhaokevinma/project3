// ------ Dependencies
const router = require("express").Router();
const patientRoutes = require("./patients");
const folderRoutes = require("./folder");

// ------ Direct to patients
router.use("/patients", patientRoutes);

// ------ Direct to folders
router.use("/folders", folderRoutes);

// ------ Export
module.exports = router;