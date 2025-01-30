import userModel from '../models/userModel.js'

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res
                .status(400)
                .send({ success: false, message: "All Fields Required" })
        }

        const newUser = await userModel.create({ name, email, password });

        return res
            .status(201)
            .send({ success: true, message: "User Created Successfully" ,newUser })

    } catch (error) {
        console.log(`registerController Error ${error}`);
        return res.status(400).send({ success: false, message: "Error in registerController", error })

    }
}

export default registerController;