import { dataRequestTariff, dataRequestSimulator } from "./dataRequest.js";
import config from "config";

export const whatsAppSendMessageTariff = async (req, res) => {
  try {
    const formData = req.body;
    const data = dataRequestTariff(formData)

    const response = await fetch(config.get('URL_WhatsApp'), {
      method: "post",
      headers: {
        'accept': 'application/json',
        "X-Api-Key": process.env.API_KEY_WHATSAPP,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      res.json(response)
    } else {
      res.status(400)
      throw new Error('Ошибка при выполнении запроса: ' + response.status);
    }
  } catch (error) {
    res.status(400)
    throw new Error('Произошла ошибка: ' + error);
  }
}

export const whatsAppSendMessageSimulator = async (req, res) => {
  try {
    const formData = req.body;
    const data = dataRequestSimulator(formData)

    const response = await fetch(config.get('URL_WhatsApp'), {
      method: "post",
      headers: {
        'accept': 'application/json',
        "X-Api-Key": process.env.API_KEY_WHATSAPP,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      res.json(response)
    } else {
      res.status(400)
      throw new Error('Ошибка при выполнении запроса: ' + response.status);
    }
  } catch (error) {
    res.status(400)
    throw new Error('Произошла ошибка: ' + error);
  }
}