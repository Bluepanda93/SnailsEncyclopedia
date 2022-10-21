const Snail = require('../models/snailSchema')

const createSnail = async (req, res) => {
  try {
    const snail = await new Snail(req.body)
    await snail.save()
    return res.status(201).json({
      snail
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createSnail
}
