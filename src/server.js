import express from 'express'
import routes from './routes'

const app = express()
app.use('/api', routes)
app.use('/', (req, res) => {
  res.send({ message: 'Welcome to the beginning of nothingness' })
})

const port = process.env.PORT || 4032
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
