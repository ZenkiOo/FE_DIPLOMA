import { nanoid } from 'nanoid';
import RouteSeatsInfoItem from './RouteSeatsInfoItem';

export default function RouteSeatsInfo({ seatsInfo }) {
  const items = [
    { id: 'fourth', name: 'Сидячий' },
    { id: 'third', name: 'Плацкарт' },
    { id: 'second', name: 'Купе' },
    { id: 'first', name: 'Люкс' },
  ];
  const data = [];

  items.map((item) => {
    if (seatsInfo[item.id]) {
      data.push({
        prices: { ...seatsInfo[item.id] },
        available: seatsInfo.available[item.id],
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
      <RouteSeatsInfoItem
        key={nanoid()}
        prices={prices}
        lowestPrice={lowestPrice}
        name={item.name}
        available={item.available}
      />
    );
  });
  return <div className="seats_info">{seatsInfoItems}</div>;
}
