const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema(
  {
    id: Number,
    name: String,
    img: {
      img1: {
        type: String,
        default:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mqKsr4Mlz-ozDfwieaDz-HHT3kuGT1Mow&usqp=CAU",
      },
      img2: {
        type: String,
        default:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mqKsr4Mlz-ozDfwieaDz-HHT3kuGT1Mow&usqp=CAU",
      },
      img3: {
        type: String,
        default:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mqKsr4Mlz-ozDfwieaDz-HHT3kuGT1Mow&usqp=CAU",
      },
      img4: {
        type: String,
        default:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mqKsr4Mlz-ozDfwieaDz-HHT3kuGT1Mow&usqp=CAU",
      },
      img5: {
        type: String,
        default:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mqKsr4Mlz-ozDfwieaDz-HHT3kuGT1Mow&usqp=CAU",
      },
    },
    location: String,
    area: String,
    star: String,
    tag: [String],
    price: Number,
    description: String,
    bhks: {type:String,
      default:"2 BHK"},
    ameneities: {type:String,default:"Gas"},
  },
  { timestamps: true }
);

const Usermodel = mongoose.model("usermodel", userschema);
module.exports=Usermodel;
