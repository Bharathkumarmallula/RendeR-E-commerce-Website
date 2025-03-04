import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//App config
const app = express()
const port = process.env.PORT || 4000;


//middlewares
app.use(express())
app.use(cors())

//api endp points

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log("Server started at port at: " ,port))