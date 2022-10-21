const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('I am Groot!'))

module.exports = router
