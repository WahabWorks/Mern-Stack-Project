import {  encryptPassword } from '../helper/userHelper.js';
import userModel from '../models/userModel.js'

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

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

export default registerController;