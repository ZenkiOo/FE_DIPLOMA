import { nanoid } from "nanoid";
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
      <div style={{ paddingLeft: 20 + 'px' }} key={nanoid()}>
        <span>{name}</span>
        <span>{currPrice}</span>
      </div>
    );
  });
  return <div>{pricesList}</div>;
}
