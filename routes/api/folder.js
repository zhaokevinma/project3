// ------ Dependencies
const router = require("express").Router();
const foldersController = require("../../controllers/foldersController");

// ------ All
router.route("/")
    .get(foldersController.findAll)
    .post(foldersController.create);

router.route("/:id")
    .get(foldersController.findById)
    .post(foldersController.update)
    .delete(foldersController.remove);
    
// ------ Export
module.exports = router;