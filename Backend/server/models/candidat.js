const mongoose = require('mongoose')

const CandidatSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const CandidatModel = mongoose.model("candidats", CandidatSchema) 
module.exports = CandidatModel 
 