// ------ Dependencies
const db = require("../models");

// ------ Controllers
module.exports = {
    findAll: function(req, res) {
        db.Patient
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Patient
            .findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Patient
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Patient
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};