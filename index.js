console.log("Hello from node")

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router=require('./routes/user.router.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// routes

app.use('/api/user',router)

const User =require('./models/user.model.js')



app.get('/', (req, res) => {
    console.log(req.body)
    res.json({ msg: "helooo" })
})



// DB connection
mongoose.connect("mongodb+srv://expressmailprovider:sabari123@cluster0.rtc79oc.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Db connected")
        app.listen(5000, () => console.log("Listening 5000"))
    }
    ).catch((e) => {
        console.log(e)
    })