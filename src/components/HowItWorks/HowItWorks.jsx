import './css/how_it_works.css';

export default function HowItWorks() {
  return (
    <section className="how_it_works_container">
      <div className="how_it_works">
        <div className="how_it_works__header">
          <h3 className="how_it_works__header_title">Как это работает</h3>
          <button className="how_it_works__header_btn">Узнать больше</button>
        </div>
        <div className="how_it_works__items">
          <div className="how_it_works__item">
            <div className="how_it_works__item_icon how_it_works__item_icon--computer"></div>
            <span className="how_it_works__item_text">
              Удобный заказ на сайте
            </span>
          </div>
          <div className="how_it_works__item">
            <div className="how_it_works__item_icon how_it_works__item_icon--house"></div>
            <span className="how_it_works__item_text">
              Нет необходимости ехать в офис
            </span>
          </div>
          <div className="how_it_works__item">
            <div className="how_it_works__item_icon how_it_works__item_icon--earth"></div>
            <span className="how_it_works__item_text">
              Огромный выбор направлений
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
