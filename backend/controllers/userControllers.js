import {  encryptPassword,matchPassword} from '../helper/userHelper.js';
import userModel from '../models/userModel.js'

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //Check Validation
        if (!name || !email || !password) {
            return res
                .status(400)
                .send({ success: false, message: "All Fields Required" })
        }
        // Check email is exist or not
        const isExist = await userModel.findOne({ email });
        if(isExist){
            return res
            .status(400)
            .send({ success: false, message: "Email Already Exist" })
        }
        // Encrypted User Password
        const hashedPassword = await encryptPassword (password);
        //Creating a new user
        const newUser = await userModel.create({ name, email, password :hashedPassword });
        return res
            .status(201)
            .send({ success: true, message: "User Created Successfully" ,newUser })

    } catch (error) {
        console.log(`registerController Error ${error}`);
        return res.status(400).send({ success: false, message: "Error in registerController", error })

    }
}

const loginController = async (req,res) =>{
    try {
        const {email,password} = req.body;
        //Check Validation
        if (!email || !password) {
            return res
                .status(400)
                .send({ success: false, message: "All Fields Required" })
        }
         // Check user email is present in db  or not
         const user = await userModel.findOne({ email });
         if(!user){
             return res
             .status(401)
             .send({ success: false, message: "Email Not Registered" })
         }
         //Matched Password
         const isMatch = await matchPassword(password,user.password)
         if(!isMatch){
            return res
            .status(401)
            .send({ success: false, message: "Invalid Email/Password"})
        }
        //Remove password field to send user data from backend to frontend
        user.password = undefined;
        //Return Successful Response
        return res
            .status(200)
            .send({ success: true, message: "Login Successful",user})
        
    } catch (error) {
        console.log(`registerController Error ${error}`);
        return res.status(400).send({ success: false, message: "Error in loginController", error })
    }
}


export {registerController,loginController};