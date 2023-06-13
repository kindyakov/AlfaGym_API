import { dataRequestTariff, dataRequestSimulator } from "./dataRequest.js";
import config from "config";

export const telegramSendMessageTariff = async (req, res) => {
  try {
    const formData = req.body;
    const params = dataRequestTariff(formData)
    const queryString = new URLSearchParams(params).toString();
    const requestUrl = `${config.get('URL_Telegram')}?${queryString}`;

    const response = await fetch(requestUrl);
    res.json(response)
  } catch (error) {
    res.status(400)
    throw new Error('Произошла ошибка: ' + error);
  }
}

export const telegramSendMessageSimulator = async (req, res) => {
  try {
    const formData = req.body;
    const params = dataRequestSimulator(formData)
    const queryString = new URLSearchParams(params).toString();
    const requestUrl = `${config.get('URL_Telegram')}?${queryString}`;

    const response = await fetch(requestUrl);

    res.json(response)
  } catch (error) {
    res.status(400)
    throw new Error('Произошла ошибка: ' + error);
  }
}