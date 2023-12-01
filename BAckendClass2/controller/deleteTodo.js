import Todo from "../models/Todo.js";

export const deleteTodo = async (req,res) =>{
    try {
        const {id} = req.params
        await  Todo.findByIdAndDelete(id)
    
        res.status(200)
        .json({
            success: true,
            // data:todo,
            messgae : `id ${id} deleted`
        })
        
    } catch (error) {

        res.status(500)
        .json({
            success: false,
            messgae : `id  not deleted`
        })
        
        
    }
}