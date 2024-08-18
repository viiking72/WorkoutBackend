require('dotenv').config();
const express= require('express')
const mongoose = require('mongoose')
const cors=require('cors')

const app=express()
const workoutRoutes = require('./routes/workouts')

app.use(workoutRoutes)
app.use(express.json())
app.use(cors())

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Database connected and Server listening on port",process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err)
})
