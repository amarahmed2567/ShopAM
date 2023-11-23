import  express from 'express'
import 'dotenv/config'
import colors from "colors"
import mongoose from 'mongoose'
import User from './Models/userModel.js'
import Product from './Models/productModel.js'
import Order from './Models/orderModel.js'
import tempProducts from './temp/Products.js'
import tempUsers from './temp/User.js'
const app = express()
const port = process.env.PORT
const DB = process.env.DB_URL

mongoose.connect(DB.replace('<password>',process.env.DB_PASSWORD))

const importDB = async()=>{
    try{
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()
        const createUser = await User.insertMany(tempUsers)
        const adminUser = createUser[0]._id
        const simpleProducts = tempProducts.map((product)=>{
            return {...product , user:adminUser}
        }) 
        await Product.insertMany(simpleProducts)
        console.log('Data Imported'.green)
        
    }catch(error){
        console.log(error)
    }
    process.exit()
}

const DeleteDB = async()=>{
    try{
        await User.deleteMany()
        await Order.deleteMany()
        await Product.deleteMany()
        console.log("data is deleted".green)
    }catch(error){
        console.log(error)
    }
    process.exit()

}

if(process.argv[2] == '-d'){
    DeleteDB()
}
else if(process.argv[2] == '-m'){
    importDB()
}
else{
    console.log('you must add a var'.red)
    process.exit()
}


