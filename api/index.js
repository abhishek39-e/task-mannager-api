const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
let isConnected = false

const connectDB = async () => {
  if (isConnected) return

  const db = await mongoose.connect(process.env.MONGO_URI)
  isConnected = db.connections[0].readyState
  console.log("MongoDB Connected")
}

app.use(async (req, res, next) => {
  await connectDB()
  next()
})
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected ✅'))
//     .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Server + DB connected 🚀')


})

app.use("/api", require('../server/notesData'))

module.exports = app
