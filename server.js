const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const connectDB = require('./config/db')



connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT:${process.env.PORT}`)
})