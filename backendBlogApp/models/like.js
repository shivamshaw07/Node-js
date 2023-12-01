import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
    like:{
        type:Boolean,
        required:true
    }
})

export default mongoose.model("Like",likeSchema)