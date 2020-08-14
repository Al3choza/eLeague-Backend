const jwt = require('jsonwebtoken')

module.exports = {
    validateToken: (req,res,next) => {
        try {
            if(!req.headers.authorization) res.status(403).send({error: 'Se requiere un Token'})
            const {authorization} = req.headers
            const token = authorization.split(" ")
            if(token[0]!='myapp') res.status(403).send({error: 'Tu Bearer es Incorrecto'})
            const decoded = jwt.verify(token[1],process.env.JWT_SECRET)
            req.decoded = decoded
            next()
        } catch (error) {
            res.status(403).send({error})
        }
    }
}