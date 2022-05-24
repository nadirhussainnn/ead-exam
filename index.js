const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const path=require('path')
const userRoute=require('./routes/userRoute')

dotenv.config()

const port=process.env.SERVER_PORT || 8585
const db=process.env.DATABASE_URL

const app=express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(fileUpload())
app.use(express.static(path.join(__dirname,'public')))

app.set('view', './views')
app.set('view engine','ejs')

mongoose.connect(db).then(con=>{
    console.log(`Connected to DB Successfully!`)
}).catch(error=>{
    console.log(`Could not connect ${error}`)
})

app.use('/api', userRoute)

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})
