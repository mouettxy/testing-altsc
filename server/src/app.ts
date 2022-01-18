import express from 'express'
import cors from 'cors'
import routes from './routes'
import { APP_PREFIX_PATH } from './config/config'
import httpStatus from 'http-status'
import ApiError from './utils/ApiError'
import { errorConverter, errorHandler } from './middlewares/error'
import passport from 'passport'
import { anonymousStrategy, jwtStrategy } from './config/passport'

const app = express()

app.use(passport.initialize())
passport.use(jwtStrategy)
passport.use(anonymousStrategy)

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get('/', (_req, res) => {
  res.send('Healthy')
})

app.use(APP_PREFIX_PATH, routes)

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)

export default app
