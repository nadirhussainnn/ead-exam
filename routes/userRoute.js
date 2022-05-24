
const express=require('express')
const userRoute=express()

const userController=require('../controllers/userController')

userRoute.get('/', userController.displayRegisterPage)
userRoute.get('/displayAllUsersPage', userController.displayAllUsersPage)
userRoute.post('/register', userController.register)

module.exports=userRoute