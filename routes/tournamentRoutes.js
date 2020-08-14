const express = require('express')
const router = express.Router()
const tournamentController = require('../controllers/tournamentController')
const middleware = require('../middleware')

router.use(middleware.validateToken)
router.get('/tournament',tournamentController.getTournaments)
router.get('/tournament/:id',tournamentController.getTournament)
router.post('/tournament',tournamentController.createTournament)
router.put('/tournament/:id',tournamentController.updateTournament)
router.delete('/tournament/:id',tournamentController.deleteTournament)

module.exports = router