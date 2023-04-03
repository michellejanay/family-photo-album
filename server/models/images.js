import mongoose from 'mongoose'

const imageSchema = mongoose.Schema(
  {
    title: String,
    image: String,
  },
  { timestamps: true }
)

const Image = mongoose.model('Item', imageSchema)

export default Image
