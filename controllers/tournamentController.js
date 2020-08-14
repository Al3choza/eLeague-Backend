const tournamentServices = require("../services/tournamentServices")
const Utils = require('../utils')

module.exports = {
    createTournament: async (req,res) => {
        try {
            const tournament = await tournamentServices.createTournament(req.body)
            res.status(201).send({tournament})
        } catch (error) {
            res.status(409).send({error})
        }
    },
    getTournaments: async (req,res) => {
        try {
            const tournaments = await tournamentServices.getTournaments().populate("teams")
            res.status(200).send({tournaments})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    getTournament: async (req,res) => {
        try {
            const tournament = await tournamentServices.getTournament(req.params.id).populate("teams")
            res.status(200).send({tournament})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    updateTournament: async (req,res) => {
        try {
            const tournament = await tournamentServices.getTournament(req.params.id)
            if(req.files){
                const id = 'eTournament/tournaments/' +  tournament._id
                const {image} = req.files
                const upload = await Utils.uploadFile(image.tempFilePath,id)
                if(upload) req.body.image_url = upload.url
            }
            const modifiedTournament = await tournamentServices.updateTournament(tournament, req.body)
            res.status(200).send({tournament: modifiedTournament})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    deleteTournament: async (req,res) => {
        try {
            await tournamentServices.deleteTournament(req.params.id)
            res.status(200).send({message: "Torneo Eliminada"})
        } catch (error) {
            res.status(404).send({error})
        }
    },
}