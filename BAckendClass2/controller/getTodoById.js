import Todo from "../models/Todo.js";

export const getTodoById = async (req,res)=>{
    try {
        //url ka params se id nikal lo
        const id = req.params.id;
        //todo ke andar id le basis pe objects lelo
        const todo = await Todo.findById({_id:id})
        
        //agar todo aya hai tho..
        if(todo){
            res.status(200)
            .json({
                success:true,
                data:todo,
                message:"milgaya todo"
            })
        }
        res.status(404)
        .json({
            success:false,
            message:"nahi mila todo"
        })
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success:false,
            message:"there is something error"
        })
    }
}