import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()
app.use(
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json()
)

app.use('/api/v1', routes)
app.use('/', (req, res) => {
  res.send({ message: 'Welcome to the beginning of nothingness' })
})

const port = process.env.PORT || 4032
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

const exitEvents = [
  'exit',
  'uncaughtException',
  'unhandledRejection',
  'SIGTERM'
]
for (const event of exitEvents) {
  process.on(event, (err) => {
    console.error(err)
    server.close()
  })
}
