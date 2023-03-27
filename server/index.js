const express = require('express')
const app = express()

const port = process.env.PORT || 5000

app.use(express())

app.get('/', (req, res) => {
  res.json({ message: 'Hello Server!' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
