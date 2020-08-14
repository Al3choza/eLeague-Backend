const userServices = require('../services/userServices')
const Utils = require('../utils')

module.exports = {
    createUser: async (req,res) => {
        try {
            const user = await userServices.createUser(req.body)
            res.status(201).send({user})
        } catch (error) {
            res.status(409).send({error})
        }
    },
    getUsers: async (req,res) => {
        try {
            const users = await userServices.getUsers()
            res.status(200).send({users})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    getUser: async (req,res) => {
        try {
            const user = await userServices.getUser(req.params.id)
            res.status(200).send({user})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    updateUser: async (req,res) => {
        try {
            const user = await userServices.getUser(req.params.id)
            if(req.files){
                const id = 'eLeague/users/' +  user._id
                const {photo} = req.files
                const upload = await Utils.uploadFile(photo.tempFilePath,id)
                if(upload) req.body.photo_url = upload.url
            }
            const modifiedUser = await userServices.updateUser(user, req.body)
            res.status(200).send({user: modifiedUser})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    deleteUser: async (req,res) => {
        try {
            const user = await userServices.getUser(req.params.id)
            await userServices.updateUser(user,{is_active: false})
            res.status(200).send({message: "Usuario Eliminado"})
        } catch (error) {
            res.status(404).send({error})
        }
    },
    login: async (req,res) => {
        try {
            const user = await userServices.findUserByEmail(req.body.email)
            if(!user) res.status(404).send({message: "Usuario No Encontrado"})

            const isMatch = userServices.comparePasswords(req.body.password, user.password)
            if(!isMatch) res.status(409).send({message: "Contraseña Incorrectos"})

            const payload = {
                id: user._id,
                name: user.name,
                email: user.email
            }
            const token = Utils.createToken(payload)
            res.status(200).send({user: user, token})
        } catch (error) {
            res.status(404).send({error})
        }
    }
}