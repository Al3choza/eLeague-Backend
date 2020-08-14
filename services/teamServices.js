const Team = require("../models/Team");

module.exports = {
    createTeam: (body) => {
        const newTeam = new Team(body)
        return newTeam.save()
    },
    getTeams: () => {
        return Team.find({is_active: true})
    },
    getTeam: (id) => {
        return Team.findById(id)
    },
    updateTeam: (team, body) => {
        Object.assign(team,body)
        return team.save()
    },
    deleteTeam: (id) => {
        return Team.findByIdAndDelete(id)
    },
}