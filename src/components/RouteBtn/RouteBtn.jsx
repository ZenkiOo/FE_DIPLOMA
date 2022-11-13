import { ReactComponent as ArrowSvg } from '../../images/icons/svg/arrow_big.svg';

export default function RouteBtn({ direction }) {
  return (
    <div className="coaches_back_btn">
      <div
        className={`coaches_back_btn__icon coaches_back_btn__icon--${direction}`}
      >
        <ArrowSvg />
      </div>
      <button type="button" className="coaches_back_btn__btn">
        Выбрать другой поезд
      </button>
    </div>
  );
}
