// ------ Dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");


// Auth Routes
router.use('/auth', authRoutes);

// ------ API routes
router.use("/api", apiRoutes);

// Default to index.html
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// ------ Export router
module.exports = router;