import Price from '../Price/Price';
import CoachOptions from './CoachOptions';

export default function CoachSeatsInfo({ coach, id, direction }) {
  return (
    <div className="coach_info">
      <h3 className="coach_info__title">
        <span className="coach_info__title_text">{id}</span>
        <span className="coach_info__title_text">вагон</span>
      </h3>
      <div className="coach_info__body">
        <div className="coach_info__item">
          <h4 className="coach_info__item_title">
            Места
            <span className="coach_info__item_title_available_seats">
              {coach.available_seats}
            </span>
          </h4>
          {['second', 'third'].includes(coach.class_type) && (
            <p className="coach_info__item_text">Верхние</p>
          )}

          <p className="coach_info__item_text">Нижние</p>
          {coach.class_type === 'third' && (
            <p className="coach_info__item_text">Боковые</p>
          )}
        </div>
        <div className="coach_info__item">
          <h4 className="coach_info__item_title">Стоимость</h4>
          {['second', 'third'].includes(coach.class_type) && (
            <p className="coach_info__item_text">
              <Price name="current" value={coach.top_price} />
            </p>
          )}
          <p className="coach_info__item_text">
            <Price name="current" value={coach.bottom_price} />
          </p>
          {coach.class_type === 'third' && (
            <p className="coach_info__item_text">
              <Price name="current" value={coach.side_price} />
            </p>
          )}
        </div>
        <div className="coach_info__item">
          <h4 className="coach_info__item_title">Обслуживание</h4>
          <CoachOptions coach={coach} direction={direction}/>
        </div>
      </div>
    </div>
  );
}
