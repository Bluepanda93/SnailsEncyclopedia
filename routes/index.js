const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('I am Groot!'))

router.post('/allSnails', controllers.createSnail)

router.get('/allSnails', controllers.getAllSnails)

router.get('/allSnails/:id', controllers.findOneSnail)

router.delete('/allSnails/:id', controllers.deleteASnail)

module.exports = router
