import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{type:String},
    author:{type:String,require:true},
    imageUrl:{type:String,require:true},
   
})

const bookModel =mongoose.model('Book',bookSchema)
export {bookModel as Book}