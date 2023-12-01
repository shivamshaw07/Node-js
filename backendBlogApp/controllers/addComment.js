import post from "../models/post.js";

export const AddComment = async (req,res) => {
    try {
        const {id} = req.params;
        const {comment} = req.body;
        const blog = await post.findByIdAndUpdate(
            {_id:id},
            
                { $push: { comment: comment } }, 
            
        )
        res.status(200)
        .json({
            success:true,
            data:blog,
            message:"added comment"
        })
    } catch (error) {
        console.error();
        res.status(200)
        .json({
            success:false,
            message:"not added comment"
        })
        
    }

}