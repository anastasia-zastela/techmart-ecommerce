const products = [
  {
    itemNo: 'iphone7_S16',
    name: 'iPhone 7',
    currentPrice: 11599,
    previousPrice: 11999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 1980 mAh ёмкость батареи / серебристый цвет',
      memory: 16,
      batteryCapacity: 1980,
      color: 'Silver',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
  {
    itemNo: 'iphone7_R16',
    name: 'iPhone 7',
    currentPrice: 11599,
    previousPrice: 11999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 1980 mAh ёмкость батареи / красный цвет',
      memory: 16,
      batteryCapacity: 1980,
      color: 'Red',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Одним словом, iPhone. Красивый дизайн, работа ос безупречна. Очень нравится качество фото. И батареи хватает надолго'
      }
    ]
  },
  {
    itemNo: 'iphone7_B16',
    name: 'iPhone 7',
    currentPrice: 11199,
    previousPrice: 11999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 1980 mAh ёмкость батареи / чёрный цвет',
      memory: 16,
      batteryCapacity: 1980,
      color: 'Black',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.2,
        text: 'Найхудший телефон что у меня был. Не покупал, подарили огрызок этот. Не рекомендую - сяоми топ за свои деньги'
      }
    ]
  },
  {
    itemNo: 'iphone7_S32',
    name: 'iPhone 7',
    currentPrice: 13599,
    previousPrice: 14999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '32GB памяти / 1980 mAh ёмкость батареи / серебристый цвет',
      memory: 32,
      batteryCapacity: 1980,
      color: 'Silver',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Очень крутая модель телефона. Пользуюсь уже полгода, довольна на все 100%. Нравится белый цвет, телефон удобный и компактный'
      }
    ]
  },
  {
      itemNo: 'iphone7_R32',
    name: 'iPhone 7',
    currentPrice: 13599,
    previousPrice: 14999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '32GB памяти / 1980 mAh ёмкость батареи / красный цвет',
      memory: 32,
      batteryCapacity: 1980,
      color: 'Red',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я взял ребенку на замену 8-ку, разница ощутима. Работает быстрее - ну, это и так понятно. Автономность выше, https://price.ua/ua/apple_iphone_11_64gb/otzivi/4155535.html компактнее, камера лучше.'
      }
    ]
  },
  {
    itemNo: 'iphone7_B32',
    name: 'iPhone 7',
    currentPrice: 13599,
    previousPrice: 14999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '32GB памяти / 1980 mAh ёмкость батареи / чёрный цвет',
      memory: 32,
      batteryCapacity: 1980,
      color: 'Black',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.2,
        text: 'Сообщение удалено администратором'
      }
    ]
  },
  {
    itemNo: 'iphone8_M16',
    name: 'iPhone 8',
    currentPrice: 15599,
    previousPrice: 16999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 1980 mAh ёмкость батареи / розовый цвет',
      memory: 16,
      batteryCapacity: 2280,
      color: 'Mistyrose',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
  {
    itemNo: 'iphone8_G16',
    name: 'iPhone 8',
    currentPrice: 15599,
    previousPrice: 16999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 1980 mAh ёмкость батареи / золотистый цвет',
      memory: 16,
      batteryCapacity: 2280,
      color: 'Gold',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
  {
    itemNo: 'iphone8_S16',
    name: 'iPhone 8',
    currentPrice: 15599,
    previousPrice: 16999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 2280 mAh ёмкость батареи / серебристый цвет',
      memory: 16,
      batteryCapacity: 2280,
      color: 'Silver',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
  {
    itemNo: 'iphone8_M32',
    name: 'iPhone 8',
    currentPrice: 15599,
    previousPrice: 16999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '32GB памяти / 2280 mAh ёмкость батареи / розовый цвет',
      memory: 32,
      batteryCapacity: 2280,
      color: 'Mistyrose',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
  {
    itemNo: 'iphone8_G32',
    name: 'iPhone 8',
    currentPrice: 15599,
    previousPrice: 16999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '32GB памяти / 2280 mAh ёмкость батареи / золотистый цвет',
      memory: 32,
      batteryCapacity: 2280,
      color: 'Gold',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
  {
    itemNo: 'iphone8_S16',
    name: 'iPhone 8',
    currentPrice: 15599,
    previousPrice: 16999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 1980 mAh ёмкость батареи / серебристый цвет',
      memory: 16,
      batteryCapacity: 2280,
      color: 'Silver',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
  {
    itemNo: 'iphone8_S16',
    name: 'iPhone 8',
    currentPrice: 15599,
    previousPrice: 16999,
    categories: 'iPhone; Smartphone',
    imageUrls: [],
    quantity: 100,
    brand: 'Apple',
    features: {
      description: '16GB памяти / 1980 mAh ёмкость батареи / серебристый цвет',
      memory: 16,
      batteryCapacity: 2280,
      color: 'Silver',
    },
    reviews: [
      {
        authorId: '',
        date: '01/10/2021',
        rate: 0.8,
        text: 'Я купил его шесть месяцев назад. Вещь стоит своих денег. Вся эта премиальность как снаружи, так и сама ios выглядит очень красиво и сдержанно, все интуитивно понятно с первого дня использования. Камера хорошая, но не самая крутая на рынке это точно. Время работы батареи в среднем 6-7 часов без игр, максимальная емкость батареи через 6 месяцев - 100%'
      }
    ]
  },
]
console.log(JSON.stringify(products))
