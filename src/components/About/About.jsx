import './css/about.css';
export default function About () {
  return (
    <section className="about_container">
      <div className="about">
        <h2 className="about__title">О нас</h2>
        <p className="about__text">
          <span className="about__text_row">
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
            через интернет.
          </span>
          <span className="about__text_row">
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
            через интернет.
          </span>
          <span className="about__text_row">
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.
            <span className="about__text_row_inner">
              Благодаря динамическому ценообразованию цена на билеты в это время
              самая низкая.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
