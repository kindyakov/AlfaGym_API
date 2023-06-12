import express from 'express'
import { whatsAppSendMessageTariff, whatsAppSendMessageSimulator } from './whatsapp.controller.js'

const router = express.Router()

router.route('/whatsapp/tariff').post(whatsAppSendMessageTariff)
router.route('/whatsapp/simulator').post(whatsAppSendMessageSimulator)

export default router