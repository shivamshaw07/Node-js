import Todo from "../models/Todo.js";

export const updateTodo = async (req,res) =>{
    try {
        
        const {id} = req.params
        const {title,description,updatedAt} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Mill gaya bhai"
        })
    }
    catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success:false,
            message:"nhi mila guys"
        })
    }
}