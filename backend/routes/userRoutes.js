import express from 'express'

const userRouter = express.Router();
// http://localhost:8080/api/v1/users/register
userRouter.post("/register",(req,res)=>{
    res.send("Register Route Working")
})

export default userRouter;