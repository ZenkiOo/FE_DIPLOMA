import { useSelector } from 'react-redux';
import CheckingItem from './CheckingItem';
import AllPassengers from './AllPassengers';
import Route from '../Routes/Route';

export default function Checking() {
  const user = useSelector((state) => state.passengers.user);
  const route = useSelector((state) => state.routesParams.routes.departure);
  const allSeats = useSelector((state) => [
    ...state.passengers.departure.seats,
    ...state.passengers.arrival.seats,
  ]);

  const uniqBy = (arr, predicate) => {
    const cb =
      typeof predicate === 'function' ? predicate : (o) => o[predicate];

    return [
      ...arr
        .reduce((map, item) => {
          const key = item === null || item === undefined ? item : cb(item);

          map.has(key) || map.set(key, item);

          return map;
        }, new Map())
        .values(),
    ];
  };

  const passengers = uniqBy(allSeats, (o) => o.person_info.document_data);
  return (
    <div className="checking">
      <CheckingItem title="Поезд">
        {route.departure?._id && <Route route={route} name="default" />}
      </CheckingItem>
      <CheckingItem title="Пассажиры">
        <AllPassengers {...{ passengers }} />
      </CheckingItem>
      <CheckingItem title="Способ оплаты">
        <div className="payment">
          <div className="payment__method">
            <span className="payment__method_text">
              {user.payment_method === 'online' ? 'Онлайн' : 'Наличными'}
            </span>
          </div>
          <div className="payment__fix">
            <button className="payment__fix_btn">Изменить</button>
          </div>
        </div>
      </CheckingItem>
    </div>
  );
}
