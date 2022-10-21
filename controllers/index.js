const Snail = require('../models/snailSchema')
const Comments = require('../models/commentsSchema')

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

const getAllSnails = async (req, res) => {
  try {
    const allSnails = await Snail.find({})
    return res.status(200).json({
      allSnails
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findOneSnail = async (req, res) => {
  try {
    const { id } = req.params
    const singleSnail = await Snail.findById(id)
    if (singleSnail) {
      return res.status(200).json({ singleSnail })
    }
    return res.status(404).send('No Snail Found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteASnail = async (req, res) => {
  try {
    const { id } = req.params
    const deleteSnail = await Snail.findByIdAndDelete(id)
    if (deleteSnail) {
      return res.status(200).send('Snail Trail Wiped.')
    }
    throw new Error('No Snail Found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comments(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findOneComment = async (req, res) => {
  try {
    const { id } = req.params
    const singleComment = await Comments.findById(id)
    if (singleComment) {
      return res.status(200).json({ singleComment })
    }
    return res.status(404).send('No Comments Found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const snailComments = async (req, res) => {
  try {
    const { snailCom } = req.params
    const singleComment = await Comments.find({ snail: snailCom })
    if (singleComment) {
      return res.status(200).json({ singleComment })
    }
    return res.status(404).send('No Comments Found!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createSnail,
  getAllSnails,
  findOneSnail,
  deleteASnail,
  createComment,
  findOneComment,
  snailComments
}
