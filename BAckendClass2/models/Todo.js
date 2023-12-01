import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:50
    },
    description:{
        type:String,
        required:true,
        maxlength:50
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})
export default mongoose.model("Todo",TodoSchema)