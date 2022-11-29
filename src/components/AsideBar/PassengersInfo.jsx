import { useSelector } from 'react-redux';
import { ReactComponent as PersonSvg } from '../../images/icons/svg/person.svg';
import Price from '../Price/Price';

export default function PassengersInfo({ seats, route }) {
  const { coaches } = useSelector((state) => state.passengers[route]);

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

  function getTotalCount(passengers) {
    let sum = 0;
    passengers.forEach((seat) => {
      sum = sum + seat.price;
    });
    return sum;
  }

  const passengers = seats?.map((seat) => ({
    id: seat.id,
    is_child: seat.is_child,
    price: getSeatPrice(seat),
  }));

  const adultPassengers = passengers.filter((pass) => !pass.is_child);
  const childPassengers = passengers.filter((pass) => pass.is_child);
  const adultTotalCount = getTotalCount(adultPassengers);
  const childTotalCount = getTotalCount(childPassengers);

  return (
    <div className="pass_info">
      <div className="pass_info__icon">
        <PersonSvg />
      </div>
      <div className="pass_info__item">
        <span className="pass_info__item_label">
          Взрослый: {adultPassengers.length}
        </span>
        <span className="pass_info__item_value">
          <Price name="pass_info" value={adultTotalCount} />
        </span>
      </div>
      <div className="pass_info__item">
        <span className="pass_info__item_label">
          Детский: {childPassengers.length}
        </span>
        <span className="pass_info__item_value">
          <Price name="pass_info" value={childTotalCount} />
        </span>
      </div>
    </div>
  );
}
