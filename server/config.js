const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')

async function connect() {
  mongoServer = await MongoMemoryServer.create()
  const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l5uwuto.mongodb.net/?retryWrites=true&w=majority`

  await mongoose.connect(mongoURI, { dbName: 'family' })
  console.log(`MongoDB successfully connected to family`)
}

module.exports.connect = connect
