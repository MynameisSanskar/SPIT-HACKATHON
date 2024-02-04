import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userschema = new Schema({
    id: Number,
    name: String,
    img: String,
    location: String,
    area: String,
    star: String,
    tag: [String],
    price: Number,
}, { timestamps: true });

const Usermodel = mongoose.model("usermodel", userschema);
export default Usermodel;
