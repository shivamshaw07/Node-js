import express from "express";
import { signin } from "../controller/signin.js";
import { login } from "../controller/login.js";
import {auth ,student,admin } from "../middlewares/auth.js";

const router = express.Router()

router.post('/sigin',signin)
router.get('/login',login)
router.get('/test',auth, (req,res)=>{
    res.status(200).json({success:true,message:"Testing for route"})
})
router.get('/student',auth,student,(req,res)=>{
    res.status(200).json({success:true,message:"You are at student route"})
})
router.get('/admin',auth,admin,(req,res)=>{
    res.status(200).json({success:true,message:"You are at amin route"})
})

export default router