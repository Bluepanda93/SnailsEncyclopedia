const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Snail = new Schema(
  {
    image: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    name: { type: String, required: true },
    region: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Snail', Snail)
