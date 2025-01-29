import express from 'express'
import colors from 'colors'

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>dfhuieukkskwqjijwi</h1>")
})

const PORT = 8080;
app.listen(PORT,()=>{console.log(`Server is Running at PORT ${PORT}`.bgBlue)});