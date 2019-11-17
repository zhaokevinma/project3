// ------ Import Router from Express
const router = require("express").Router();

// ------ GET request to reach /test
router.get("/test", (req, res) => {
    res.send("Test route");
})

// ------ Export router
module.exports = router;