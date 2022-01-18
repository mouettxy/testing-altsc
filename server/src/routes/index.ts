import express from 'express'

import news from './news.route'
import auth from './auth.route'

const router = express.Router()

router.use('/news', news)
router.use('/auth', auth)

export default router
