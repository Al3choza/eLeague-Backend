const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    image_url: String,
    user_admin:{
        type: mongoose.Schema.ObjectId, 
        ref: "User"
    },
    is_active:{
        type: Boolean,
        default: true
    },
}, {timestamps: true} )

const Team = mongoose.model('Team',teamSchema)

module.exports = Team