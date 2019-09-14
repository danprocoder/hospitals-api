import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import model from './database/models'

require('dotenv').config()

const app = express()

// Define response helper functions
const responseFunctions = {
  unauthorized: {
    status: 401
  },
  success: {
    status: 200
  },
  created: {
    status: 201
  },
  internalServerError: {
    status: 500,
    data: {
      message: 'Internal server error'
    }
  }
}
for (const funcName in responseFunctions) {
  const res = responseFunctions[funcName]

  app.response[funcName] = function (data = res.data) {
    data.executionTime = `${((new Date()) - this.req.startMillis) / 1000}s`
    data.timestamp = new Date()

    this.status(res.status).json(data)
  }
}

app.use((req, res, next) => {
  req.startMillis = (new Date()).getTime()
  next()
})

app.use(
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json()
)

// Define routes
app.use('/api/v1', routes)
app.use('/', async (req, res) => {
  const totalHospitals = await model.Hospitals.count()

  res.send({
    message: 'Welcome',
    data: {
      totalHospitals
    }
  })
})

// Start server
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
