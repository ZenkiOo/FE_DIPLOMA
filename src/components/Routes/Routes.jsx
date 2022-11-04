import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import RouteTimeInfo from './RouteTimeInfo';
import RouteSeatsInfo from './RouteSeatsInfo';

import { ReactComponent as TrainSvg } from '../../images/icons/svg/train.svg';
import { ReactComponent as ArrowSvg } from '../../images/icons/svg/arrow.svg';

export default function Routes({ data }) {
  const routes = data.map((route) => (
    <li className="routes__item" key={route.departure._id}>
      <a href="#" className="route">
        <div className="route__train">
          <div className="route__train_logo">
            <TrainSvg />
          </div>
          <h3 className="route__train_id">{route.departure._id.slice(-4)}</h3>
          <p className="route__train_from">
            {route.departure.from.city.name}
            <ArrowSvg />
          </p>
          <p className="route__train_to">{route.departure.to.city.name}</p>
          <p className="route__train_name">«{route.departure.train.name}»</p>
        </div>
        <div className="route__body">
          <div className="route__body_time">
            <RouteTimeInfo route={route.departure} />
            {route.arrival && <RouteTimeInfo route={route.arrival} reversed />}
          </div>
          <div className="route__body_prices">
            <RouteSeatsInfo
              seatsInfo={{
                ...route.departure.price_info,
                avaliable: route.departure.available_seats_info,
              }}
            />
            <div>{route.have_wifi.toString()}</div>
            <div>{route.is_express.toString()}</div>
            <div>{route.have_air_conditioning.toString()}</div>
          </div>
        </div>
      </a>
    </li>
  ));

  return (
    <>
      Routes
      <ul className="routes">{routes}</ul>
    </>
  );
}

Routes.defaultProps = {
  data: [],
};

Routes.propTypes = {
  data: PropTypes.array,
};
