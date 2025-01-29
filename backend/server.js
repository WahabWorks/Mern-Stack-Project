import express from 'express'
import colors from 'colors'
import connectDB from './config/db.js';

// MongoDB Connection
connectDB();

const server = express();

server.get("/",(req,res)=>{
    res.send("<h1>Creating server (express)</h1>")
})

const PORT = 8080;
server.listen(PORT,"Localhost",()=>{console.log(`Server is Running at PORT ${PORT}`.bgBlue)});