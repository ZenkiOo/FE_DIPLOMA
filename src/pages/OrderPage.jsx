import '../css/order.scss';
import { useSelector } from 'react-redux';
import { ReactComponent as EmailSvg } from '../images/icons/svg/order/order_email.svg';
import { ReactComponent as PrintSvg } from '../images/icons/svg/order/order_print.svg';
import { ReactComponent as ShowSvg } from '../images/icons/svg/order/order_show.svg';
import { ReactComponent as StarSvg } from '../images/icons/svg/order/star.svg';
import TotalSum from '../components/AsideBar/TotalSum';

export default function OrderPage() {
  const name = useSelector(
    (state) =>
      `${state.passengers.user.first_name} ${state.passengers.user.patronymic}`
  );
  const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }].map(
    (star) => (
      <li key={star.id} className="order_info__stars_item">
        <button className="order_info__stars_item_btn">
          <StarSvg />
        </button>
      </li>
    )
  );
  return (
    <main className="order_page">
      <div className="order_page__container">
        <h2 className="order_page__title">Благодарим Вас за заказ!</h2>
        <div className="order_info">
          <div className="order_info__header">
            <span className="order_info__header_order_id">№Заказа 285АА</span>
            <span className="order_info__header_sum">
              <span className="order_info__header_sum_text">сумма</span>
              <span className="order_info__header_sum_value">
                <TotalSum name="checking" />
              </span>
            </span>
          </div>
          <ul className="order_info__icons">
            <li className="order_info__icons_item">
              <span className="order_info__icons_item_icon">
                <EmailSvg />
              </span>
              <p className="order_info__icons_item_text">
                билеты будут отправлены на ваш e-mail
              </p>
            </li>
            <li className="order_info__icons_item">
              <span className="order_info__icons_item_icon">
                <PrintSvg />
              </span>
              <p className="order_info__icons_item_text">
                распечатайте и сохраняйте билеты до даты поездки
              </p>
            </li>
            <li className="order_info__icons_item">
              <span className="order_info__icons_item_icon">
                <ShowSvg />
              </span>
              <p className="order_info__icons_item_text">
                предьявите распечатанные билеты при посадке
              </p>
            </li>
          </ul>
          <div className="order_info__body">
            <h3 className="order_info__title">{name}!</h3>
            <p className="order_info__text">
              <span className="order_info__text_row">
                Ваш заказ успешно оформлен.
              </span>
              <span className="order_info__text_row">
                В ближайшее время с вами свяжется наш оператор для
                подтверждения.
              </span>
            </p>
            <p className="order_info__subtext">
              Благодарим Вас за оказанное доверие и желаем приятного
              путешествия!
            </p>
          </div>
          <div className="order_info__footer">
            <div className="order_info__stars">
              <span className="order_info__stars_text">Оценить сервис</span>
              <ul className="order_info__stars_body">{stars}</ul>
            </div>
            <div className="order_info__action">
              <button type="button" className="order_info__action_btn">
                Вернуться на главную
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
