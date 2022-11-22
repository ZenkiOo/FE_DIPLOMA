import { useSelector } from 'react-redux';
import { ReactComponent as DateSvg } from '../../images/icons/svg/date.svg';
import Options from './Options';

import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function AsideBar() {
  const { routes, coaches } = useSelector((state) => state.routesParams);
  const { departure, arrival } = useSelector((state) => state.passengers);
  const [priceValue, setPriceValue] = useState({ min: 2500, max: 5000 });

  const handlePickerChange = (value, { name }) => {
    console.log(value, name);
  };

  const activeOptionsList = routes.active
    ? 'routes'
    : departure.active
    ? 'departure'
    : arrival.active
    ? 'arrival'
    : 'all_coaches';

  return (
    <div className="routes_details">
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
      <div className="routes_details__price">
        <h3 className="routes_details__title routes_details__title--price">
          Стоимость
        </h3>
        <div className="routes_details__price_range">
          <InputRange
            maxValue={7000}
            minValue={1920}
            value={priceValue}
            onChange={(value) => setPriceValue(value)}
            onChangeComplete={(value) => console.log('hoba', value)}
          />
        </div>
      </div>
    </div>
  );
}
