import { User } from '../models/user.model'
import ApiError from '../utils/ApiError'
import express from 'express'
import httpStatus from 'http-status'
import { authenticate } from 'passport'

const router = express.Router()

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !user.validPassword(password)) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, 'Invalid email or password')
    }

    res.json(user.toAuthJSON())
  } catch (e) {
    next(e)
  }
})

router.post('/register', async (req, res, next) => {
  try {
    const { credentials, email, password } = req.body
    const user = new User()

    user.credentials = credentials
    user.email = email

    user.setPassword(password)

    await user.save()

    res.json(user.toAuthJSON())
  } catch (e) {
    if (e.name === 'MongoError') return res.status(httpStatus.BAD_REQUEST).send(e)
    next(e)
  }
})

router.get('/me', authenticate('jwt', { session: false }), async (req, res) => {
  res.send(req.user)
})

export default router
