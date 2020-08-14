const League = require("../models/League");

module.exports = {
    createLeague: (body) => {
        const newLeague = new League(body)
        return newLeague.save()
    },
    getLeagues: () => {
        return League.find({is_active: true})
    },
    getLeague: (id) => {
        return League.findById(id)
    },
    updateLeague: (league, body) => {
        Object.assign(league,body)
        return league.save()
    },
    deleteLeague: (id) => {
        return League.findByIdAndDelete(id)
    },
}