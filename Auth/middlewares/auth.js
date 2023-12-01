import jwt from "jsonwebtoken";
import {config as configDotenv } from "dotenv";
configDotenv()

export const auth = (req,res,next) =>{
    try {
        // yaha pr hum token nikal rahe hai ...  acha btao ye token req ka body mai kaha se aya?
        // ye token login krne ke baad req ke body mai aya hai login wale controller mai dekhna
        // waha pr humlogo ne line no. 26 pe jwt.sign wale method se bnaya tha jo expire ho jayega 2hrs mai
        // or phir hum logo ne line no. 28 pe uss user ke body mai token inject kr diya tha
        const token = req.body.token
        if(!token){
            res.status(403).json({
                success:false,
                message:"Token missing" //token nhi hai mtlb user logged in nhi hai
            })
        }

        try {
            const payload = jwt.verify(token,process.env.SECRET_KEY)
            /*  yaha pr humlog payload nikal rahe
            // hai jo humlog ne login wale controller mai line 19 mai inject kiya tha
            const paylaod = {
            email:user.email,
            id:user._id,
            role:user.role
            }
            ye kuch info tha payload mai
             */
            console.log(payload);
            req.body = payload
            next()
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message:"inValid user",
                success:false
            })    
        }
        
    } catch (error) {
        console.log(console.error);
        return res.status(500).json({
            succes:false,
            message:"something went wrong internal server issue"
        })
    }

}


export const student = (req,res,next) =>{
    try {
        
        const role = req.body.role
    
        if(role !== "student"){
            return res.status(403).json({
                message:"Sorry, you are trying to access not valid route at student",
                success:false
            })
        }
        next()
    } catch (error) {
        console.log(console.error);
        return res.status(500).json({
            succes:false,
            message:"something went wrong internal server issue"
        })
    }
}


export const admin = (req,res,next) =>{
    try {
        
        const role = req.body.role
    
        if(role !== "admin"){
            return res.status(403).json({
                message:"Sorry, you are trying to access not valid route at admin",
                success:false
            })
        }
        next()
    } catch (error) {
        console.log(console.error);
        return res.status(500).json({
            succes:false,
            message:"something went wrong internal server issue"
        })
    }
}