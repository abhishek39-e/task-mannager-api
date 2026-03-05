const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected ✅'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Server + DB connected 🚀')
})

app.use("/api", require('../server/notesData'))

module.exports = app