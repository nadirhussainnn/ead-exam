
const express=require('express')
const userRoute=express()

const userController=require('../controllers/userController')

userRoute.get('/', userController.displayRegisterPage)
userRoute.get('/displayAllUsersPage', userController.displayAllUsersPage)
userRoute.post('/register', userController.register)
userRoute.get('/deleteUser',userController.deleteUser)
userRoute.get('/displayUpdatePage',userController.displayUpdatePage)
userRoute.post('/updateUser',userController.update)


module.exports=userRoute