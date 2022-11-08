import PropTypes from 'prop-types';
import RouteSeatsInfoPopover from './RouteSeatsInfoPopover';
import Price from '../Price/Price';
import { useState } from 'react';

export default function RouteSeatsInfoItem({
  name,
  avaliable,
  lowestPrice,
  prices,
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="seats_info__item">
      <span className="seats_info__item_name">{name}</span>
      <div className="seats_info__item_data">
        <span
          className="seats_info__item_count"
          onMouseOver={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          {avaliable}
        </span>
        <Price name='default' value={lowestPrice}/>
      </div>
      {active && (
        <div className="seats_info__popover">
          <RouteSeatsInfoPopover prices={prices} />
        </div>
      )}
    </div>
  );
}
RouteSeatsInfoItem.propTypes = {
  name: PropTypes.string,
  avaliable: PropTypes.number,
  lowestPrice: PropTypes.number,
  prices: PropTypes.array,
};
