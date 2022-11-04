import RouteSeatsInfoPopover from './RouteSeatsInfoPopover';
import { nanoid } from "nanoid";
export default function RouteSeatsInfo({ seatsInfo }) {
  const items = [
    { id: 'first', name: 'Люкс' },
    { id: 'second', name: 'Купе' },
    { id: 'third', name: 'Плацкарт' },
    { id: 'fourth', name: 'Сидячий' },
  ];
  const data = [];
  
  items.map((item) => {
    if (seatsInfo[item.id]) {
      data.push({
        prices: { ...seatsInfo[item.id] },
        avaliable: seatsInfo.avaliable[item.id],
        name: item.name,
      });
    }
  });

  function minPrice(arr) {
    let a = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i][1] < a) {
        a = arr[i][1];
      }
    }

    return a;
  }

  const seatsInfoItems = data.map((item) => {
    const prices = Object.entries(item.prices);
    const lowestPrice = minPrice(prices);
    return (
      <div className="seats_info__item" key={nanoid()}>
        <span className="seats_info__item_name">{item.name}</span>
        <span className="seats_info__item_count">{item.avaliable}</span>
        <span className="seats_info__item_price">от {lowestPrice} р.</span>
        <div className="seats_info__popover">
          <RouteSeatsInfoPopover prices={prices} />
        </div>
      </div>
    );
  });
  return <div className="seats_info">{seatsInfoItems}</div>;
}
