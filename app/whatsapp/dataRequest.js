export const dataRequestTariff = (obj) => {
  const message = (name, price, tariff) => {
    return `Здравствуйте ${name}! Вас беспокоит менеджер Ярослав клуб АlfaGym, Вы выбрали тарифный план ${tariff} по цене ${price}.`
  }
  const data = {
    WhatsappID: process.env.WHATS_APP_ID,
    async: true,
    recipient: {
      number: obj.phone
    },
    message: {
      body: message(obj.name, obj.price, obj.tariff)
    }
  }

  return data
}

export const dataRequestSimulator = (obj) => {
  const message = (name, price, simulator) => {
    return `Здравствуйте ${name}! Вас беспокоит менеджер Ярослав клуб АlfaGym, Вы выбрали тренажер ${simulator} по цене ${price}.`
  }
  const data = {
    WhatsappID: process.env.WHATS_APP_ID,
    async: true,
    recipient: {
      number: obj.phone
    },
    message: {
      body: message(obj.name, obj.price, obj.simulator)
    }
  }

  return data
}