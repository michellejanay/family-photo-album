const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/', (req, res) => {
  res.json({ message: 'Hello Server!' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
