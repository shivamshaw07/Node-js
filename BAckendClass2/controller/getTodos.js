import Todo from "../models/Todo.js";

export const getTodos = async (req,res) =>{
    try {
        //fetch all todos
        const response = await Todo.find({});
    
        res.status(200)
        .json({
            data:response,
            success:true,
            message:"got all the enteries"
        });
        
    } catch (error) {
        console.log(console.error());
        res.status(500)
        .json({
            error:error.message,
            success:false,
            message:"fatt gaya"
        })
    }

}