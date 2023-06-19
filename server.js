import 'colors'
import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import { errorHandler } from './app/middleware/error.middleware.js';
import WhatsappRoutes from './app/whatsapp/whatsapp.routes.js';
import TelegramRoutes from './app/telegram/telegram.routes.js'

dotenv.config()

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors()) // для отправки запросов с браузера
app.use(express.json())

app.use('/api', WhatsappRoutes)
app.use('/api', TelegramRoutes)

// Обработка ошибки
app.use(errorHandler)

const main = async () => {
  try {
    app.listen(PORT, () => console.log(`🚀 server start http://localhost:${PORT}`.blue.bold))
  } catch (error) {
    console.log(error)
  }
}

main();