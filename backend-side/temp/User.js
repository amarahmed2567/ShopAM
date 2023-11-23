import bcrypt from "bcryptjs"

export default [
    {
        name:"admin",
        email:"admin@gmail.com",
        password:bcrypt.hashSync("267982",10),
        isAdmin:true
    },
    {
        name:"Amar Ahmed",
        email:"amarahmed.com",
        password:bcrypt.hashSync("267869",10)
    },
    {
        name:"Ahmed khaled",
        email:"ahmedkhaled@gmail.com",
        password:bcrypt.hashSync("267282",10)
    }
]
