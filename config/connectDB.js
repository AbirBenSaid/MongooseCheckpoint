const mongoose= require('mongoose')
require('dotenv').config({path:'./config/.env'})

const connectDB=async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex:true, useFindAndModify:false, useUnifiedTopology: true})
        console.log("The database is connected")
    } catch (error) {
     console.log('The database is NOT connected')   
    }


}
module.exports= connectDB