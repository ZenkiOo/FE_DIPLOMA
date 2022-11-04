import { ReactComponent as WifiSvg } from '../../images/icons/svg/routes_wifi.svg';
import { ReactComponent as ExpressSvg } from '../../images/icons/svg/routes_express.svg';
import { ReactComponent as CoffeSvg } from '../../images/icons/svg/routes_coffee.svg';

export default function RouteOptions() {
  return (
    <ul className="route__options">
      <li className="route__options_item">
        <WifiSvg />
      </li>
      <li className="route__options_item">
        <ExpressSvg />
      </li>
      <li className="route__options_item">
        <CoffeSvg />
      </li>
    </ul>
  );
}
