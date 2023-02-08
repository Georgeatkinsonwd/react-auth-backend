const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const connectDB = require('./config/db')
const bcrypt = require('bcrypt')
const User = require('./models/User')
const homeRoutes = require('./routes/homeRoutes')

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/', homeRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT:${process.env.PORT}`)
})