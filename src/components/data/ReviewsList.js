import avatar_0 from '../../images/avatars/avatar_0.png'
import avatar_1 from '../../images/avatars/avatar_1.png'
import avatar_2 from '../../images/avatars/avatar_2.jpg'
import avatar_3 from '../../images/avatars/avatar_3.jpg'
import avatar_4 from '../../images/avatars/avatar_4.jpg'
import avatar_5 from '../../images/avatars/avatar_5.jpg'
import avatar_6 from '../../images/avatars/avatar_6.jpg'

export default class ReviewsList {
  constructor() {
    this.reviews = [
      {
        id: 0,
        img: avatar_0,
        reviewer: 'Екатерина Вальнова',
        text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
      },
      {
        id: 1,
        img: avatar_1,
        reviewer: 'Евгений Стрыкало',
        text: 'СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
      },
      {
        id: 2,
        img: avatar_2,
        reviewer: 'Kesha123456',
        text: 'В далекие и беззаботные, как сейчас оказалось, времена, еще даже до пандемии, я довольно часто путешествовала поездом. В другие города России или в Казахстан. Покупала билеты в приложении РЖД. Потом началась вся эта катавасия, стало не до поездок, и приложение было удалено со смартфона за ненадобностью. С месяц назад наконец-то наметилось небольшое путешествие, ну а так как приложения на телефоне не было, я решила купить билеты онлайн, но с ноутбука.',
      },
      {
        id: 3,
        img: avatar_3,
        reviewer: 'fausts',
        text: 'Беру билеты здесь уже не первый раз, сайт намного удобнее ржд + больше способов оплаты (плачу зачастую через paylate в рассрочку, либо юмани если билет беру в одну сторону и только на себя). Был казус с отправкой билета на почту - оплатил, заполнил данные, а на ящик ничего так и не пришло (даже в папке спам ничего не было), хотя на сайте в личном кабинете билет отображался.',
      },
      {
        id: 4,
        img: avatar_4,
        reviewer: 'ЛюбочкА01',
        text: 'Не покупайте здесь билеты!!! Первый раз покупала билет на сайте ЖД-билеты. Да, купить быстро. Переплатите, конечно рублей 300 за ж/д билет. Если захотите вернуть билет - пожалуйста, но на возврат денег за него, даже не рассчитывайте. Вроде бы и все оформили..., и на последнюю кнопочку "вернуть билет" нажали, денежку ждете (от 3 до 30 дней на возврат). Долго нету? Звоните. А Вам говорят, якобы вы не все оформили, наверное на кнопочку "вернуть билет" забыли нажать. Конечно! Спустя время разве докажешь!!!',
      },
      {
        id: 5,
        img: avatar_5,
        reviewer: 'ratanyav',
        text: 'Из доверия именно сайту РЖД оплатила буквально мгновенно. А потом увидела, что сумма больше, чем я ожидала, обратила внимание на то, что это сервис для покупки билетов а вовсе не сайт РЖД, стала звонить, узнавать, как мне вернуть билет (на сайте было указано "вы можете вернуть билет в любое время до отправления поезда"). Консультант сказала мне, что вернуть можно все за удержанием 350 руб - это комиссия сервиса.',
      },
      {
        id: 6,
        img: avatar_6,
        reviewer: 'NadiLissa',
        text: 'В прошлый вторник брала билет на сапсан Москва — Санкт-Петербур всего за 4 тысячи на базовый класс, вполне комфортно для короткой поездки. Точное отображение количества оставшихся мест на разные даты. Могу запланировать поездку заранее. Электронные билеты удобны в применении, никаких бумажек.',
      },
    ];
  }
}
