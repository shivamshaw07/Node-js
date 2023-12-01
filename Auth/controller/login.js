import jwt from 'jsonwebtoken';
import Signin from '../model/sigin.js'
import bcrypt from 'bcrypt'
import {config as configDotenv } from 'dotenv';
configDotenv()

export const login = async (req,res) =>{
    try {
        const {email,password} = req.body;
        var user = await Signin.findOne({email})

        if(!user){
            //user not found
            return res.status(500).json({
                message:"email not registered go to signin",
                succes:"false"
            })
        }
        const paylaod = {
            email:user.email,
            id:user._id,
            role:user.role
        }
        if(await bcrypt.compare(password,user.password)){
            //correct password
            const token = jwt.sign(paylaod,process.env.SECRET_KEY,{expiresIn:"2h"})
            user = user.toObject();
            user.token = token
            user.password = undefined

            const options = {
                httpOnly:true,
                expires: new Date(Date.now() + 30*24*60*60*1000)
            }

            res.cookie("token",token,options).status(200).json({
                succes:true,
                token:token,
                message:"user successfully logged in",
                user
            })
        }
        else{
            //wrong password
            return res.status(500).json({
                message:"wrong password",
                succes:"false"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"error occuered",
            succes:"false"
        })
        
    }


}