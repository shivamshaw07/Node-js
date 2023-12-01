import post from "../models/post.js";

export const viewpost = async (req,res)=>{
    try {
        const data = await post.find({});
        res.status(200)
        .json({
            sucess:true,
            message:"sab kuch yaha hai",
            data:data
        })
        
    } catch (error) {
        console.error(console.error());
        res.status(500)
        .json({
            sucess:false,
            message:"hogya gandogal",
            
        })
    }
}