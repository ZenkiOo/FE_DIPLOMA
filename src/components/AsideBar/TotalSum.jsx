import { useSelector } from 'react-redux';
import Price from '../Price/Price';

export default function TotalSum({ name }) {
  const coaches = useSelector((state) => [
    ...state.passengers.departure.coaches,
    ...state.passengers.arrival.coaches,
  ]);
  const seats = useSelector((state) => [
    ...state.passengers.departure.seats,
    ...state.passengers.arrival.seats,
  ]);

  function getSeatPrice(seat) {
    const coach = coaches?.find((coach) => coach._id === seat.coach_id);
    if (coach) {
      const seatPrice = seat.top ? coach.top_price : coach.bottom_price,
        seatCurrPrice = !seat.is_child ? seatPrice : seatPrice / 2,
        wifiPrice = seat.wifi ? coach.wifi_price : 0,
        linensPrice = seat.linens
          ? !coach.is_linens_included
            ? coach.linens_price
            : 0
          : 0,
        totalPrice = seatCurrPrice + wifiPrice + linensPrice;
      return totalPrice;
    }
  }

  const passengers = seats?.map((seat) => ({
    id: seat.id,
    price: getSeatPrice(seat),
  }));

  function getTotalCount(passengers) {
    let sum = 0;
    passengers.forEach((seat) => {
      sum = sum + seat.price;
    });
    return sum;
  }

  const totalSum = getTotalCount(passengers);
  return (
    <div className={`total_sum total_sum--${name}`}>
      {name !== 'checking' && <span className="total_sum__text">итог</span>}
      <span className="total_sum__value">
        <Price name={name} value={totalSum} />
      </span>
    </div>
  );
}
