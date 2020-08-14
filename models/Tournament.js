const mongoose = require('mongoose')

const tournamentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image_url: String,
    seat: String,
    teams:[{
        type: mongoose.Schema.ObjectId, 
        ref: "Team"
    }],
}, {timestamps: true} )

const Tournament = mongoose.model('Tournament',tournamentSchema)

module.exports = Tournament