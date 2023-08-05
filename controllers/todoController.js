const Todo = require('../modals/todo');

const userController={
    createTodo: async (req,res)=>{
        try{
            const newTodo = await Todo.create(req.body);
            res.json(newTodo)
        } catch(err){
            res.status(500).json({error: 'Error creating user'});
        }
    },
    getTodo: async (req,res)=>{
        try{
            const todos = await Todo.find();
            res.json(todos)
        } catch(err){
            res.status(500).json({error: 'Error creating user'});
        }
    },
    updateTodo: async (req,res)=>{
        try{
            const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body{
                new: true,
            });
            res.json(updateTodo)
        } catch(err){
            res.status(500).json({error: 'Error updating todo'});
        }
    },
    deleteTodo: async (req,res)=>{
        try{
            await Todo.findIdAndDelete(req.params.id);
            res.json({message: "Todo deleted successfully"})
        } catch(err){
            res.status(500).json({error: 'Error creating user'});
        }
    },

}