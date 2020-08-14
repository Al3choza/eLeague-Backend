const leagueServices = require("../services/leagueServices")
const tournamentServices = require("../services/tournamentServices")
const Utils = require('../utils')

module.exports = {
    createLeague: async (req,res) => {
        try {
            const league = await leagueServices.createLeague(req.body)
            res.status(201).send({league})
        } catch (error) {
            res.status(409).send({error})
        }
    },
    getLeagues: async (req,res) => {
        try {
            const leagues = await leagueServices.getLeagues().populate("tournaments")
            res.status(200).send({leagues})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    getLeague: async (req,res) => {
        try {
            const league = await leagueServices.getLeague(req.params.id).populate("tournaments")
            res.status(200).send({league})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    updateLeague: async (req,res) => {
        try {
            const league = await leagueServices.getLeague(req.params.id)
            if(req.files){
                const id = 'eLeague/leagues/' +  league._id
                const {image} = req.files
                const upload = await Utils.uploadFile(image.tempFilePath,id)
                if(upload) req.body.image_url = upload.url
            }
            const modifiedLeague = await leagueServices.updateLeague(league, req.body)
            res.status(200).send({league: modifiedLeague})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    deleteLeague: async (req,res) => {
        try {
            await leagueServices.deleteLeague(req.params.id)
            res.status(200).send({message: "Liga Eliminada"})
        } catch (error) {
            res.status(404).send({error})
        }
    },
}