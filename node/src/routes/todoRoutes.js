const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todoControllers');

router.get('/', todoControllers.getTasks);

router.get('/:id', todoControllers.getTask);

router.post('/', todoControllers.addTask);

router.put('/:id', todoControllers.editTask);

router.delete('/:id', todoControllers.deleteTask);

module.exports = router;