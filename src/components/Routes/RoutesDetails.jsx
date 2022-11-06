import { ReactComponent as DateSvg } from '../../images/icons/svg/date.svg';
import { ReactComponent as SecondClassSvg } from '../../images/icons/svg/routes_options/have_second_class.svg';
import { ReactComponent as ThirdClassSvg } from '../../images/icons/svg/routes_options/have_third_class.svg';
import { ReactComponent as FourthClassSvg } from '../../images/icons/svg/routes_options/have_fourth_class.svg';
import { ReactComponent as FirstClassSvg } from '../../images/icons/svg/routes_options/have_first_class.svg';
import { ReactComponent as WifiSvg } from '../../images/icons/svg/routes_options/have_wifi.svg';
import { ReactComponent as ExpressSvg } from '../../images/icons/svg/routes_options/have_express.svg';

import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function RoutesDetails() {
  const params = useSelector((state) => state.routesParams);
  const handlePickerChange = (value, { name }) => {
    console.log(value, name);
  };
  const options = {
    have_second_class: {
      id: 0,
      name: 'Купе',
      icon: <SecondClassSvg />,
    },
    have_third_class: {
      id: 1,
      name: 'Плацкарт',
      icon: <ThirdClassSvg />,
    },
    have_fourth_class: {
      id: 2,
      name: 'Сидячий',
      icon: <FourthClassSvg />,
    },
    have_first_class: {
      id: 3,
      name: 'Люкс',
      icon: <FirstClassSvg />,
    },
    have_wifi: {
      id: 4,
      name: 'Wi-Fi',
      icon: <WifiSvg />,
    },
    have_express: {
      id: 5,
      name: 'Экспресс',
      icon: <ExpressSvg />,
    },
  };
  const [priceValue, setPriceValue] = useState({ min: 2500, max: 5000 });

  const optionsList = Object.entries(options).map((option) => (
    <li className="routes_details__option" key={option[1].id}>
      <label className="routes_details__option_label">
        <div
          className={`routes_details__option_icon routes_details__option_icon--${option[0]}`}
        >
          {option[1].icon}
        </div>
        <div className="routes_details__option_name">
          <span className="routes_details__option_name_text">
            {option[1].name}
          </span>
        </div>
        <div className="routes_details__option_checkbox">
          <input
            type="checkbox"
            name={option[0]}
            id={`routes_checkbox_${option[0]}`}
          />
          <span className="routes_details__option_checkbox_fake_body"></span>
        </div>
      </label>
    </li>
  ));

  return (
    <div className="routes_details">
      <div className="routes_details__dates">
        <h3 className="routes_details__title">Дата поездки</h3>
        <div className="routes_details__dates_item">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            placeholderText="ДД/ММ/ГГ"
            selected={+new Date(params.date_start)}
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
            selected={+new Date(params.date_end)}
            locale={ru}
            onChange={(date) =>
              handlePickerChange(+date, { name: 'arrDateField' })
            }
          />
          <DateSvg />
        </div>
      </div>
      <div className="routes_details__options">
        <ul className="routes_details__options_list">{optionsList}</ul>
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
