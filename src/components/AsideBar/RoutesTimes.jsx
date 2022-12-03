import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DirectionBtn from './DirectionBtn';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import {
  setStartDepartureHour,
  setEndDepartureHour,
  setStartArrivalHour,
  setEndArrivalHour,
} from '../../store/slices/routesParams';

export default function RoutesTimes() {
  const { routes } = useSelector((state) => state.routesParams);
  const dispatch = useDispatch();
  const [start_departure_hour, set_start_departure_hour] = useState({
    min: 0,
    max: 24,
  });
  const [end_departure_hour, set_end_departure_hour] = useState({
    min: 0,
    max: 24,
  });
  const [start_arrival_hour, set_start_arrival_hour] = useState({
    min: 0,
    max: 24,
  });
  const [end_arrival_hour, set_end_arrival_hour] = useState({
    min: 0,
    max: 24,
  });
  const handlePriceChange = ({ value, name }) => {
    switch (name) {
      case 'start_departure_hour':
        dispatch(setStartDepartureHour({ value }));
        break;
      case 'end_departure_hour':
        dispatch(setEndDepartureHour({ value }));
        break;
      case 'start_arrival_hour':
        dispatch(setStartArrivalHour({ value }));
        break;
      case 'end_arrival_hour':
        dispatch(setEndArrivalHour({ value }));
        break;

      default:
        break;
    }
  };
  return (
    <div className="routes_times">
      {(routes.active && routes.params.date_start) && (
        <>
          <DirectionBtn direction="departure" disabled />
          <h4 className="routes_times__title">Время отбытия</h4>
          <div className="routes_times__input_wrap">
            <InputRange
              maxValue={24}
              minValue={0}
              value={start_departure_hour}
              onChange={(value) => set_start_departure_hour(value)}
              onChangeComplete={(value) =>
                handlePriceChange({ value, name: 'start_departure_hour' })
              }
            />
          </div>
          <h4 className="routes_times__title routes_times__title--arrival">
            Время прибытия
          </h4>
          <div className="routes_times__input_wrap">
            <InputRange
              maxValue={24}
              minValue={0}
              value={end_departure_hour}
              onChange={(value) => set_end_departure_hour(value)}
              onChangeComplete={(value) =>
                handlePriceChange({ value, name: 'end_departure_hour' })
              }
            />
          </div>
        </>
      )}

      {(routes.active && routes.params.date_end) && (
        <>
          <DirectionBtn direction="arrival" disabled />
          <h4 className="routes_times__title">Время отбытия</h4>
          <div className="routes_times__input_wrap">
            <InputRange
              maxValue={24}
              minValue={0}
              value={start_arrival_hour}
              onChange={(value) => set_start_arrival_hour(value)}
              onChangeComplete={(value) =>
                handlePriceChange({ value, name: 'start_arrival_hour' })
              }
            />
          </div>
          <h4 className="routes_times__title routes_times__title--arrival">
            Время прибытия
          </h4>
          <div className="routes_times__input_wrap">
            <InputRange
              maxValue={24}
              minValue={0}
              value={end_arrival_hour}
              onChange={(value) => set_end_arrival_hour(value)}
              onChangeComplete={(value) =>
                handlePriceChange({ value, name: 'end_arrival_hour' })
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
