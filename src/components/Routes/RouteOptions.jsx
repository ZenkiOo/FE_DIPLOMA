import PropTypes from 'prop-types';

import { ReactComponent as WifiSvg } from '../../images/icons/svg/routes_wifi.svg';
import { ReactComponent as ExpressSvg } from '../../images/icons/svg/routes_express.svg';
import { ReactComponent as AirSvg } from '../../images/icons/svg/coaches_options/air.svg';

export default function RouteOptions({ options }) {
  const svgArr = [<WifiSvg />, <ExpressSvg />, <AirSvg />];
  const routeOptionsList = Object.entries(options).map((option) => (
    <li
      key={option[0]}
      className={[
        'route__options_item',
        options[option[0]] ? 'route__options_item--active' : '',
      ]
        .join(' ')
        .trim()}
    >
      {svgArr[option[0]]}
    </li>
  ));
  return (
    <>{options && <ul className="route__options">{routeOptionsList}</ul>}</>
  );
}
RouteOptions.propTypes = {
  options: PropTypes.array,
};
RouteOptions.defaultProps = {
  options: [],
};
