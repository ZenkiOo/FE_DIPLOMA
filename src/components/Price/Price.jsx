import './css/price.css';
import PropTypes from 'prop-types';
import { ReactComponent as RubleSvg } from '../../images/icons/svg/ruble.svg';

export default function Price({ name, value }) {
  return (
    <span className={`rly_price rly_price--${name}`}>
      {['default', 'last_routes'].includes(name) && (
        <span className="rly_price__text">от </span>
      )}
      {value.toLocaleString()}
      <RubleSvg />
    </span>
  );
}
Price.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};
