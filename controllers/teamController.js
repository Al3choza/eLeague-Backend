const teamServices = require("../services/teamServices")
const Utils = require('../utils')

module.exports = {
    createTeam: async (req,res) => {
        try {
            const team = await teamServices.createTeam(req.body)
            res.status(201).send({team})
        } catch (error) {
            res.status(409).send({error})
        }
    },
    getTeams: async (req,res) => {
        try {
            const teams = await teamServices.getTeams()
            res.status(200).send({teams})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    getTeam: async (req,res) => {
        try {
            const team = await teamServices.getTeam(req.params.id)
            res.status(200).send({team})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    updateTeam: async (req,res) => {
        try {
            const team = await teamServices.getTeam(req.params.id)
            if(req.files){
                const id = 'eLeague/teams/' +  team._id
                const {image} = req.files
                const upload = await Utils.uploadFile(image.tempFilePath,id)
                if(upload) req.body.image_url = upload.url
            }
            const modifiedTeam = await teamServices.updateTeam(team, req.body)
            res.status(200).send({team: modifiedTeam})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    deleteTeam: async (req,res) => {
        try {
            await teamServices.deleteTeam(req.params.id)
            res.status(200).send({message: "Liga Eliminada"})
        } catch (error) {
            res.status(404).send({error})
        }
    },
}