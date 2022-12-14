import { useLocation, useNavigate } from 'react-router-dom';
import RouteTimeInfo from './RouteTimeInfo';
import RouteSeatsInfo from './RouteSeatsInfo';
import RouteOptions from './RouteOptions';
import Time from '../Time/Time';
import { ReactComponent as TrainSvg } from '../../images/icons/svg/train.svg';
import { ReactComponent as ArrowSvg } from '../../images/icons/svg/arrow.svg';
import { useDispatch } from 'react-redux';
import {
  setCoachesActive,
  setRoutesActive,
} from '../../store/slices/routesParams';
import { clearSeats } from '../../store/slices/passengers';

export default function Route(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { departure } = props.route;

  function changeTrain() {
    navigate('/routes');
    dispatch(setRoutesActive());
    dispatch(clearSeats());
  }

  function handleOrderBtn() {
    location.pathname === '/checking'
      ? changeTrain()
      : dispatch(
          setCoachesActive({
            departure: props.route,
            arrival: {
              departure: props.route.arrival ? props.route.arrival : {},
            },
          })
        );
  }
  return (
    <>
      {departure._id && (
        <div className={`routes__item routes__item--${props.name}`}>
          <div className="route">
            <div className="route__train">
              <div className="route__train_logo">
                <TrainSvg />
              </div>
              <h3 className="route__train_id">{departure._id.slice(-4)}</h3>
              <p className="route__train_from">
                {departure.from.city.name}
                <ArrowSvg />
              </p>
              <p className="route__train_to">{departure.to.city.name}</p>
              <p className="route__train_name">«{departure.train.name}»</p>
            </div>
            <div className="route__body">
              <div className="route__body_time">
                <RouteTimeInfo route={departure} reversed={false} />
                {props.route.arrival && props.name === 'default' && (
                  <RouteTimeInfo route={props.route.arrival} reversed={true} />
                )}
              </div>
              {props.name === 'default' ? (
                <div className="route__body_prices">
                  <RouteSeatsInfo
                    seatsInfo={{
                      ...departure.price_info,
                      available: departure.available_seats_info,
                    }}
                  />
                  <RouteOptions
                    options={[
                      departure.have_wifi,
                      departure.is_express,
                      departure.have_air_conditioning,
                    ]}
                  />
                  <div className="route__order">
                    <button
                      className={[
                        'route__order_btn',
                        location.pathname === '/checking'
                          ? 'route__order_btn--white'
                          : '',
                      ]
                        .join(' ')
                        .trim()}
                      onClick={handleOrderBtn}
                    >
                      {location.pathname === '/checking'
                        ? 'Изменить'
                        : 'Выбрать места'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="route__duration">
                  <Time />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
