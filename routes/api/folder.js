// ------ Dependencies
const router = require("express").Router();
const foldersController = require("../../controllers/foldersController");

// ------ All
router.route("/")
    .get(foldersController.findAll)
    .post(foldersController.create);

router.route("/:id")
    .get(foldersController.findById)
    
// ------ Export
module.exports = router;