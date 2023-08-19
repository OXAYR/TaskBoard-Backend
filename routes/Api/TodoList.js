const { Router } = require('express')
const Todo = require('../../models/todo')

const router = Router()

router.get('/todo', async (req, res) => {
     try {
        const todoList = await Todo.find()
        if (!todoList) throw new Error('No Todo List found')
        res.status(200).json(todoList)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/todo', async (req, res) => {
    const newTodo = new Todo(req.body)
    try {
        const todo = await newTodo.save()
        if (!todo) {
            return res.status(500).json({ message: 'Something went wrong saving the Todo' })
        }
        res.status(200).json(todo)
    } catch (error) {
        console.error('Error saving todo:', error)
        res.status(500).json({ message: 'eror encounter in the backend' })
    }
})

router.patch('/todo/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/todo/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const removed = await Todo.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router