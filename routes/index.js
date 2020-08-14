const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const leagueRoutes = require('./leagueRoutes')
const tournamentRoutes = require('./tournamentRoutes')
const teamRoutes = require('./teamRoutes')

router.get('/',(req,res) => res.status(200).send({message: 'eLeague / Server on'}))
router.use(userRoutes)
router.use(leagueRoutes)
router.use(tournamentRoutes)
router.use(teamRoutes)

module.exports = router