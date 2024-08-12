import mongoose from "mongoose";

const processTypeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:Text,
        required:true,
    }

})

export default mongoose.model('ProcessType',processTypeSchema)