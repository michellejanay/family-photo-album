import Image from '../models/images.js'

export const getImages = async (req, res) => {
  res.send('get images')
  try {
    const image = await Image.find()
    res.status(200).json(image)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createImage = async (req, res) => {
  const image = new Image(req.body)

  try {
    await image.save()
    res.status(201).json(image)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
