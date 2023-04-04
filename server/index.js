import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import './models/images.js'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const Images = mongoose.model('imageDetails')

app.get('/', async (req, res) => {
  try {
    res.json({ message: 'Hello Server!' })
  } catch (error) {
    res.json({ error: error })
  }
})

app.post('/upload', async (req, res) => {
  const { base64, title } = req.body
  try {
    Images.create({ image: base64, title: title })
    res.json({ image: 'uploaded' })
  } catch (error) {
    res.json({ error: error })
  }
})

// connect
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l5uwuto.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoURI, { dbName: 'family-photos' })
console.log(`MongoDB successfully connected to family-photos`)

app.listen(port, () => console.log(`Listening on port ${port}`))
