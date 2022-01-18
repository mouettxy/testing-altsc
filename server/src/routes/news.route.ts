import { News } from '../models/news.model'
import ApiError from '../utils/ApiError'
import express from 'express'
import httpStatus from 'http-status'
import { authenticate } from 'passport'

const router = express.Router()

router.get('/', authenticate(['jwt', 'anonymous'], { session: false }), async (req, res) => {
  const news = await News.find()

  res.json(news)
})

router.get('/:id', async (req, res, next) => {
  try {
    const newsEntry = await News.findOne({ _id: req.params.id })

    if (!newsEntry) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Store not found')
    }

    res.json(newsEntry)
  } catch (e) {
    next(e)
  }
})

router.post('/', authenticate(['jwt'], { session: false }), async (req, res, next) => {
  try {
    const newsEntry = new News(req.body)

    await newsEntry.save()

    res.json(newsEntry)
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', authenticate(['jwt'], { session: false }), async (req, res, next) => {
  try {
    const newsEntry = await News.findOne({ _id: req.params.id })

    if (!newsEntry) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Store not found')
    }

    const { title, description } = req.body

    if (title) {
      newsEntry.title = title
    }

    if (description) {
      newsEntry.description = description
    }

    await newsEntry.save()

    res.json(newsEntry)
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', authenticate(['jwt'], { session: false }), async (req, res, next) => {
  try {
    const newsEntry = await News.findOne({ _id: req.params.id })

    if (!newsEntry) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Store not found')
    }

    await newsEntry.delete()

    res.status(httpStatus.NO_CONTENT).send()
  } catch (e) {
    next(e)
  }
})

export default router
