import PropTypes from 'prop-types';
import RouteOptions from '../Routes/RouteOptions';
import Price from '../Price/Price';

export default function LastRoute({ route }) {
  return (
    <li className="last_route">
      <ul className="last_route__header">
        <li className="last_route__header_item">
          <span className="last_route__header_item_city">
            {route.departure.from.city.name}
          </span>
          <span className="last_route__header_item_rly_name">
            {route.departure.from.railway_station_name}
          </span>
        </li>
        <li className="last_route__header_item">
          <span className="last_route__header_item_city">
            {route.departure.to.city.name}
          </span>
          <span className="last_route__header_item_rly_name">
            {route.departure.to.railway_station_name}
          </span>
        </li>
      </ul>
      <div className="last_route__footer">
        <RouteOptions />
        <Price name="last_routes" value={route.min_price} />
      </div>
    </li>
  );
}
LastRoute.propTypes = {
  route: PropTypes.object,
};
