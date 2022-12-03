import './asidebar.scss';
import {
  setRoutesParam,
  setPricePickerValue,
} from '../../store/slices/routesParams';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as DateSvg } from '../../images/icons/svg/date.svg';
import Options from './Options';
import DirectionBtns from './DirectionBtns';
import TotalSum from './TotalSum';
import RoutesTimes from './RoutesTimes';

import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function AsideBar() {
  const { routes } = useSelector((state) => state.routesParams);
  const { departure, arrival } = useSelector((state) => state.passengers);
  const [priceValue, setPriceValue] = useState({ min: 0, max: 9000 });
  const location = useLocation();
  const dispatch = useDispatch();
  const activeOptionsList = routes.active
    ? 'routes'
    : departure.active
    ? 'departure'
    : arrival.active
    ? 'arrival'
    : 'all_coaches';
  const handlePickerChange = (value, { name }) => {
    dispatch(
      setRoutesParam({
        param: name === 'depDateField' ? 'date_start' : 'date_end',
        value: new Date(value).toISOString().substring(0, 10),
      })
    );
  };
  const handlePriceChange = (value) => {
    dispatch(setPricePickerValue({ value }));
  };

  return (
    <div className="routes_details">
      {['/passengers', '/payment', '/checking'].includes(location.pathname) ? (
        <>
          <h3 className="passengers_title">Детали поездки</h3>
          <DirectionBtns />
          <TotalSum name="total" />
        </>
      ) : (
        <>
          <div className="routes_details__dates">
            <h3 className="routes_details__title">Дата поездки</h3>
            <div className="routes_details__dates_item">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                selected={+new Date(routes.params.date_start)}
                locale={ru}
                onChange={(date) =>
                  handlePickerChange(+date, { name: 'depDateField' })
                }
              />
              <DateSvg />
            </div>
            <h3 className="routes_details__title">Дата возвращения</h3>
            <div className="routes_details__dates_item">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                selected={+new Date(routes.params.date_end)}
                locale={ru}
                onChange={(date) =>
                  handlePickerChange(+date, { name: 'arrDateField' })
                }
              />
              <DateSvg />
            </div>
          </div>
          <div className="routes_details__options">
            <Options active={activeOptionsList} />
          </div>
          {routes.active && (
            <div className="routes_details__price">
              <h3 className="routes_details__title routes_details__title--price">
                Стоимость
              </h3>
              <div className="routes_details__price_range">
                <InputRange
                  maxValue={9000}
                  minValue={0}
                  value={priceValue}
                  onChange={(value) => setPriceValue(value)}
                  onChangeComplete={(value) => handlePriceChange(value)}
                />
              </div>
            </div>
          )}
          <div className="routes_details__times">
            <RoutesTimes />
          </div>
        </>
      )}
    </div>
  );
}
