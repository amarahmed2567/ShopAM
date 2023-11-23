import express from 'express'
import 'dotenv/config'
import User from './Models/userModel.js'
const app = express()

app.post('/',async (req,res)=>{
    try{
    const data = {name:"example3",email:"example3@gmail.com",password:"example3 "}
    const userData = await User.insertMany(data)  
    res.    json(userData)
}
catch(error){
    console.log(error)
}
})

export default app


