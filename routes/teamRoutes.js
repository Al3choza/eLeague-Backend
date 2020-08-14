const express = require('express')
const router = express.Router()
const teamController = require('../controllers/teamController')
const middleware = require('../middleware')

router.use(middleware.validateToken)
router.get('/team',teamController.getTeams)
router.get('/team/:id',teamController.getTeam)
router.post('/team',teamController.createTeam)
router.put('/team/:id',teamController.updateTeam)
router.delete('/team/:id',teamController.deleteTeam)

module.exports = router