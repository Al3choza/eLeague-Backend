const Tournament = require("../models/Tournament");

module.exports = {
    createTournament: (body) => {
        const newTournament = new Tournament(body)
        return newTournament.save()
    },
    getTournaments: () => {
        return Tournament.find()
    },
    getTournament: (id) => {
        return Tournament.findById(id)
    },
    updateTournament: (tournament, body) => {
        Object.assign(tournament,body)
        return tournament.save()
    },
    deleteTournament: (id) => {
        return Tournament.findByIdAndDelete(id)
    },
}