import express from 'express'
import { telegramSendMessageTariff, telegramSendMessageSimulator } from './telegram.controller.js'

const router = express.Router()

router.route('/telegram/tariff').post(telegramSendMessageTariff)
router.route('/telegram/simulator').post(telegramSendMessageSimulator)

export default router