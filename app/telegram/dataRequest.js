export const dataRequestTariff = (obj) => {
  const message = ({ name, price, tariff, phone }) => {
    return `Привет, менеджеры 👋!\n\nХочу поделиться информацией о новом заказе от клиента ${name}. Он выбрал тариф "<b>${tariff}</b>" по цене <b>${price}</b>.\n\nПожалуйста, свяжитесь с ним по номеру телефона: <u>${phone}</u>, чтобы обсудить детали и подтвердить заказ.\n\nСпасибо!\n<i><b>PS AlfaGym_Bot</b></i> 🤖`
  }
  const params = {
    apikey: process.env.API_KEY_TELEGRAM,
    text: message(obj),
    html: 'yes'
  }

  return params
}

export const dataRequestSimulator = (obj) => {
  const message = ({ name, price, simulator, phone }) => {
    return `Привет, менеджеры 👋!\n\nХочу поделиться информацией о новом заказе от клиента ${name}. Он оформил заказ на тренажер "${simulator}" по цене ${price}.\n\nПожалуйста, свяжитесь с ним по номеру телефона: ${phone}, чтобы обсудить детали и организовать доставку тренажера.\n\nСпасибо!\nPS AlfaGym_Bot 🤖`
  }
  const params = {
    apikey: process.env.API_KEY_TELEGRAM,
    text: message(obj),
    html: 'yes'
  }

  return params
}