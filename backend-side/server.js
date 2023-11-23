import app from './index.js'
import 'dotenv/config'
import mongoose from 'mongoose'
const port = process.env.PORT
const DB = process.env.DB_URL

mongoose.connect(DB.replace('<password>',process.env.DB_PASSWORD))


app.listen(port,()=>{
   return console.log(`Runing on Port ${port}...`)
})
