// ------ Dependencies
const db = require("../models");

// ------ Controllers
module.exports = {
    findAll: function(req, res) {
        db.Patient
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};