const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    sport:{
        type: String,
        required: true
    },
    start_date: Date,
    end_date: Date,
    image_url: String,
    user_admin:{
        type: mongoose.Schema.ObjectId, 
        ref: "User"
    },
    tournaments:[{
        type: mongoose.Schema.ObjectId, 
        ref: "Tournament"
    }],
    is_active:{
        type: Boolean,
        default: true
    },
}, {timestamps: true} )

const League = mongoose.model('League',leagueSchema)

module.exports = League