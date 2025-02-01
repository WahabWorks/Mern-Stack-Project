import express from 'express'
import colors from 'colors'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'


dotenv.config();
// MongoDB Connection
connectDB();

const server = express();

//Middleware
server.use(morgan("dev"));
server.use(express.json());
server.use(cors({origin:"http://localhost:5173",credentials:true}))

//importing routes
import userRoutes from "./routes/userRoutes.js";

server.use("/api/v1/users",userRoutes)

const PORT =  process.env.PORT || 5000  ;

server.listen(PORT,"Localhost",()=>{console.log(`Server is Running at PORT ${PORT}`.bgBlue)});