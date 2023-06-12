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
    console.log();
    res.send(data)
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

    res.json(response)
  } catch (error) {
    res.status(400)
    throw new Error('Произошла ошибка: ' + error);
  }
}