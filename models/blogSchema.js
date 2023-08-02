const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    heading:{
        type:String,
        default:"no heading"
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    // createdBy:
    content:{
        type:String,
        required:true
    },
    images:[]


})
const blogs = mongoose.model("blogs",blogSchema)

module.exports=blogs