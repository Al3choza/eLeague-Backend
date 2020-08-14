const express = require('express')
const router = express.Router()
const leagueController = require('../controllers/leagueController')
const middleware = require('../middleware')

router.use(middleware.validateToken)
router.get('/league',leagueController.getLeagues)
router.get('/league/:id',leagueController.getLeague)
router.post('/league',leagueController.createLeague)
router.put('/league/:id',leagueController.updateLeague)
router.delete('/league/:id',leagueController.deleteLeague)

module.exports = router