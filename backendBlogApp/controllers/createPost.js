import post from "../models/post.js";

export const createPost = async (req,res) =>{
    try {
        const {user,description,createdAt} = req.body;
        const posted = await post.create({user,description,createdAt})
    
        res.status(200)
        .json({
            success:true,
            data:posted,
            message:"Posted successFully"
        })
        
    } catch (error) {
        res.status(200)
        .json({
            success:false,
            
            message:"Posted UnsuccessFully"
        })
    }
}