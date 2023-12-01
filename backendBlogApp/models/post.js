import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    comment:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})

export default mongoose.model("Post",postSchema)