import mongoose from "mongoose";

const usersModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    idAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
}
,{
    timestamps:true
}
)

 export default mongoose.model('User',usersModel)