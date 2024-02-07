
require('dotenv').config()
const CardsRoutes = require("./routes/routes.js")
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const profile =require('./routes/profile')
const cors= require('cors')
const axios = require("axios");

// express app
const app = express()
app.use(cors({ origin: true }));
// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/',CardsRoutes)
app.use('/api/user', userRoutes)
app.use('/api/profile',profile)
// app.post("/chat/signup", async (req, res) => {
//   const { username, secret, email, first_name, last_name } = req.body;

//   // console.log("Write user into DB.");
//   // return res.json({ user: {} });

//   // Store a user-copy on Chat Engine!
//   try {
//     const r = await axios.post(
//       "https://api.chatengine.io/users/",
//       { username, secret, email, first_name, last_name },
//       { headers: { "Private-Key": "d8757ea5-7b8f-4abb-939f-f4faf210b000"} }
//     );
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

app.post("/chat/login", async (req, res) => {
  const { username, secret } = req.body;

  // console.log("Fetch user from DB.");
  // return res.json({ user: {} });

  // Fetch this user from Chat Engine in this project!
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": "331fc169-7ad0-43aa-946d-9e37e9dc55c8",
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })