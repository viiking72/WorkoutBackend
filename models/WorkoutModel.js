const mongoose=require('mongoose');

const WorkoutSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    load:{
        type:String,
        required:true
    },
    reps:{
        type:String,
        requied:true
    }
},{timestamps:true})

const collection= mongoose.model('Workout',WorkoutSchema)
module.exports = collection