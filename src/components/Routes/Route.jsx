import RouteTimeInfo from './RouteTimeInfo';
import RouteSeatsInfo from './RouteSeatsInfo';
import RouteOptions from './RouteOptions';
import { ReactComponent as TrainSvg } from '../../images/icons/svg/train.svg';
import { ReactComponent as ArrowSvg } from '../../images/icons/svg/arrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setCoachesActive } from '../../store/slices/routesParams';

export default function Route(props) {
  const { state } = useSelector((state) => state.routesParams);
  const dispatch = useDispatch();
  const { departure } = props.route;
  return (
    <>
      {departure._id && (
        <li className="routes__item">
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
                <RouteTimeInfo route={departure} />
                {props.route.arrival && (
                  <RouteTimeInfo route={props.route.arrival} reversed />
                )}
              </div>
              <div className="route__body_prices">
                <RouteSeatsInfo
                  seatsInfo={{
                    ...departure.price_info,
                    avaliable: departure.available_seats_info,
                  }}
                />
                <RouteOptions />
                {/* <div>{route.have_wifi}</div>
  <div>{route.is_express}</div>
  <div>{route.have_air_conditioning}</div> */}
                <div className="route__order">
                  <button
                    className="route__order_btn"
                    onClick={() =>
                      dispatch(
                        setCoachesActive({
                          dep: props.route,
                          arr: {
                            departure: props.route.arrival
                              ? props.route.arrival
                              : null,
                          },
                        })
                      )
                    }
                  >
                    Выбрать места
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
