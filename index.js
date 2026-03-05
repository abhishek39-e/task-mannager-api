const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected ✅')
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Server + DB connected 🚀')
})


// Get notes
app.use("/", require('./routes/UsersRoutes'))


module.exports = app;