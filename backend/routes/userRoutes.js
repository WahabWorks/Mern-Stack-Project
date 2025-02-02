import express from 'express'
import {registerController,loginController} from '../controllers/userControllers.js';

const userRouter = express.Router();
// http://localhost:8080/api/v1/users/register
userRouter.post("/register",registerController)
// http://localhost:8080/api/v1/users/login
userRouter.post("/login",loginController)

export default userRouter;