import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    }
})

export default mongoose.model('Comment',commentSchema)