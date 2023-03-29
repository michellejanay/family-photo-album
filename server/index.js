const config = require('./config')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
// const logger = require('morgon')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage
const cors = require('cors')
const port = process.env.PORT || 5000
// const imageRouter = require('../client/src/images')

require('dotenv').config()

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())
// app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'client')))

//replaces Mongoose's own promise library ( mpromise ) by Bluebird (which is probably faster, better tested, and has more utility functions available)
mongoose.Promise = require('bluebird')

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@family.7jxsmau.mongodb.net/?retryWrites=true&w=majority`

const connect = mongoose.connect(url, {
  // useNewParser: true,
  useUnifiedTopology: true,
})

connect.then(
  () => {
    console.log('Connected to database: family')
  },
  (err) => console.log(err)
)

//create storage engine
// const storage = new GridFsStorage({
//   url: config.mongoURI,
//   file: await (req, file) => {
//     return
//   },
// })

// Initialize Storage Engine
const storage = new GridFsStorage({
  url: config.mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = buf.toString('hex') + path.extname(file.originalname)
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
})

const upload = multer({ storage })

app.get('/', (req, res) => {
  res.json({ message: 'Hello Server!' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
