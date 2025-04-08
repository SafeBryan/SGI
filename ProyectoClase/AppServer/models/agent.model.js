const mongoose = require('mongoose')
const AgentSchema = mongoose.Schema({
    dni:{
        type: String,
        required: true,
        unique: true
    },
    firstname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    creationDate:{
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('agent', AgentSchema)