// const connect = require('./config')
const express = require('express')
const cors = require('cors')

const methodOverride = require('method-override')
const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage
const port = process.env.PORT || 5000
// const imageRouter = require('../client/src/images')

require('dotenv').config()

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.get('/', (req, res) => {
  try {
    res.json({ message: 'Hello Server!' })
  } catch (error) {
    res.json({ error: error })
  }
})

// connect

const mongodb = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l5uwuto.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongodb, { dbName: 'family-photos' })
console.log(`MongoDB successfully connected to family-photos`)

app.listen(port, () => console.log(`Listening on port ${port}`))
