import Signin from '../model/sigin.js'
import bcrypt from "bcrypt";

export const signin = async (req,res) =>{
    try {
            const {password,name,email,role} = req.body;
            const checkVaild = await Signin.findOne({email})
            if(checkVaild){
                return res.status(500).json({
                    success:false,
                    message:"Email already exists"
                })
            }
            let hasedPassword;
            try {
                hasedPassword = await bcrypt.hash(password,10)
                
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    success:false,
                    message:"Email already exists"
                })
            }

            const data = await Signin.create({password:hasedPassword,email,name,role})

            
                res.status(200).json({

                    success:true,
                    data:data,
                    message:"data recieved"
                })
        
            
        
    } catch (error) {
        res.status(500).json({

            success:false,
            
            message:"data not recieved"
        })
    }
}
