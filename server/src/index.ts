import mongoose from 'mongoose'
import app from './app'
import { APP_PORT, DB_URI } from './config/config'

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
}

console.log('connecting to database...')

mongoose
  .connect(DB_URI, options)
  .then(() => {
    console.log('Mongoose connection done')
    app.listen(APP_PORT, () => {
      console.log(`server listening on ${APP_PORT}`)
    })
  })
  .catch((e) => {
    console.log('Mongoose connection error')
    console.error(e)
  })

// If the Node process ends, close the Mongoose connection (ctrl + c)
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    process.exit(0)
  })
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception: ' + err)
})
