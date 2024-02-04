// import express from "express";
// import cors from 'cors';
// import mongoose from "mongoose";
// import Usermodel from "./user.js";

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://webgeniusai:erfgZ4woRw1838os@sanskar.7cbexxe.mongodb.net/WebGeniusAi")
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// app.get('/getCards', async (req, res) => {
//   try {
//     const users = await Usermodel.find({});
//     console.log('Users fetched:', users); // Log fetched users
//     res.status(200).json({ status: "ok", data: users });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ status: "Something Went Wrong" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Backend server running on port ${PORT}`);
// });


import express from 'express'
import CardsRoutes from "./routes/routes.js"
import mongoose from 'mongoose'
import cors from 'cors'
let app=express()
const PORT=3001


// global middeleware to understand all requests
// app.use((req,res,next)=>{
//   console.log(req.path,req.method);
//   next();
// })



// // Get Request
// app.get('/',(req,res)=>{
//   res.json({status:"ok"})
// })

app.use(cors())

// middkeWare
app.use(express.json())

// Routes
app.use('/',CardsRoutes)

// connecting to db
mongoose.connect("mongodb+srv://webgeniusai:erfgZ4woRw1838os@sanskar.7cbexxe.mongodb.net/WebGeniusAi")

  .then(()=>{
    // listening to PORT
    app.listen(PORT,()=>{
      console.log(`Listening to ${PORT}`);
    }
    )


    console.log("connected");})
  .catch((e)=>{
    console.log(e);
  })














