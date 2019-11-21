// ------ Dependencies
const db = require("../models");

// ------ Controllers
module.exports = {
    findAll: function(req, res) {
        db.Folder
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Folder
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Folder
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};