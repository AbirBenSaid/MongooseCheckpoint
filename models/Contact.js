const mongoose= require('mongoose')
const schema=mongoose.Schema

const contactSchema= new schema ({
firstName:{type:String, required:true},
lastName:{type:String, required:true},
email:{type:String,unique:true, required:true},
phoneNumber: Number
})
module.exports=mongoose.model("Contact", contactSchema)