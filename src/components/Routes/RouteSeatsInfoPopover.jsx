import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Price from '../Price/Price';

export default function RouteSeatsInfoPopover({ prices }) {
  const names = {
    top_price: 'верхние',
    bottom_price: 'нижние',
    side_price: 'боковые',
  };
  const pricesList = prices.map((price) => {
    const name = names[price[0]];
    const currPrice = price[1];
    return (
      <div className="seats_info__popover_item" key={nanoid()}>
        <span className="seats_info__popover_item_name">{name}</span>
        <Price name="current" value={currPrice}/>
      </div>
    );
  });
  return <>{pricesList}</>;
}
RouteSeatsInfoPopover.propTypes = {
  prices: PropTypes.array,
};
