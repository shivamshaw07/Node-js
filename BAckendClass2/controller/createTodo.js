import Todo from "../models/Todo.js";

//define route handler
export const createTodo = async(req,res)=>{
    try {
        //extract title and description from request body
        const {title,description} = req.body;
        //create a new todo object and insert in db
        const response = await Todo.create({title,description});
        //send json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"data recieved"
            }
        );
        
    } catch (err) {
        console.error(err)
        console.log(err);
        res.status(500)
        .json({
                success:false,
                data:'data error',
                message:err.message
        })
        
    }
}