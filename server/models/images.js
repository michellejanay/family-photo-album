import mongoose from 'mongoose'

const imageSchema = mongoose.Schema(
  {
    title: String,
    image: String,
  },
  { timestamps: true },
  { collection: 'imageDetails' }
)

const Image = mongoose.model('imageDetails', imageSchema)

export default Image
