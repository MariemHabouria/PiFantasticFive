const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")

const CandidatModel = require('./models/candidat')


const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/candidat");

app.post("/Frontend/login", (req, res) => {
    const {email, password} = req.body;
    CandidatModel.findOne({email: email})
    .then(user => {
       if(user) {
       if(user.password === password) {
            res.json("Success")
    } else {
    res.json("the password is incorrect")
    } 
        }else {
    res.json("No record existed")
    }
    })
}) 

app.post('/Frontend/register', (req, res) => {
  
    CandidatModel.create(req.body)
    .then(candidats => res.json(candidats) )
    .catch(err => res.json(err))

})


app.listen(3001, ()=>{
    console.log("server is running")
})