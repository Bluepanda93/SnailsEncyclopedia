const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('I am Groot!'))

router.post('/allSnails', controllers.createSnail)

router.post('/Comments', controllers.createComment)

router.get('/allSnails', controllers.getAllSnails)

router.put('/allSnails/:id', controllers.updateASnail)

router.get('/allSnails/:id', controllers.findOneSnail)

router.delete('/allSnails/:id', controllers.deleteASnail)

router.get('/Comments/:snailCom', controllers.snailComments)

router.get('/Comments/:id', controllers.findOneComment)

module.exports = router
