import express from 'express'
import registerController from '../controllers/userControllers.js';

const userRouter = express.Router();
// http://localhost:8080/api/v1/users/register
userRouter.post("/register",registerController)

export default userRouter;