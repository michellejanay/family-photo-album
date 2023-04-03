const Image = require('./images')

async function getImages(req, res) {
  console.log('get images')
  try {
    const image = await Image.find()
    res.status(200).json(image)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

async function createImage(req, res) {
  const image = new Image(req.body)

  try {
    await image.save()
    res.status(201).json(image)
  } catch (error) {
    res.status(500).json({ message: error.message, status: error.status })
  }
}

module.exports.getImages = getImages
module.exports.createImage = createImage
