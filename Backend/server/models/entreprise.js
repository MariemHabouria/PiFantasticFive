const mongoose = require('mongoose')

const EntrepriseSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    matriculeFiscale : String,
    adresse : String,
    type : String
})

const EntrepriseModel = mongoose.model("entreprise", EntrepriseSchema) 
module.exports = EntrepriseModel
 