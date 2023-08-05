const express = require('express');
const {createTodo , getTodo, updateTodo, deleteTodo } = require('../controllers/todoController')

const router = express.Router();

router.post('/todos',createTodo);
router.post('/todos',getTodo);
router.post('/todos/:id',updateTodo);
router.post('/todos/:id',deleteTodo);
module.exports = router;