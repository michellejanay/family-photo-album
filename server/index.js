import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

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
