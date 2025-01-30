import express from 'express'
import colors from 'colors'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config();
// MongoDB Connection
connectDB();

const server = express();

//Middleware
server.use(morgan("dev"));

//importing routes
import userRoutes from "./routes/userRoutes.js";
// http://localhost:8080
// http://localhost:8080/api/v1/users

server.use("/api/v1/users",userRoutes)

const PORT =  process.env.PORT || 5000  ;

server.listen(PORT,"Localhost",()=>{console.log(`Server is Running at PORT ${PORT}`.bgBlue)});