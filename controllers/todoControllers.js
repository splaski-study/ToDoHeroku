const db = require('../models/db_functions');
// mongoose.set('useFindAndModify', false);

module.exports.getTasks = function (req, res) {
    db.gets().then(results => res.json(results))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.getTask = function (req, res) {
    db.getById(req.params.id)
        .then(results => results ? res.json(results) : res.status(404).json({err: 'Task not found'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.addTask = function (req, res) {
    db.add(req.body)
        .then(results => res.status(201).json(results))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.editTask = function (req, res) {
    db.update(req.body, req.params.id)
        .then(results => results ? res.json(results) : res.status(400).json({err: 'Task not found'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.deleteTask = function (req, res) {
    db.delete(req.params.id)
        .then(results => results ? res.json(results) : res.status(400).json({err: 'Task not found'}))
        .catch(err => res.status(400).json({err: err.message}))
};
