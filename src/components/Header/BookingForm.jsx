// import { useSelector, useDispatch } from 'react-redux';
import { useLazyGetCitiesByNameQuery } from '../../store/api';
import { useState, useEffect } from 'react';

// import {
//   changeDepartureInput,
//   changeArrivalInput,
//   changeDeparureDateInput,
//   changeArrivalDateInput,
// } from '../../store/slices/routesSearch';

import { ReactComponent as LocaSvg } from '../../images/icons/svg/loca.svg';
import { ReactComponent as DateSvg } from '../../images/icons/svg/date.svg';
import CitiesSelect from './CitiesSelect';
import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function BookingForm() {
  const [getCities] = useLazyGetCitiesByNameQuery();

  const [searchRoutesForm, setSearchRoutesForm] = useState({
    departureField: { cityName: '', id: null, isValid: false },
    arrivalField: { cityName: '', id: null, isValid: false },
    departureDateField: '',
    arrivalDateField: '',
  });
  const [citiesList, setCitiesList] = useState({
    departure: [],
    arrival: [],
  });

  function useValidity(value, { name }) {
    useEffect(() => {
      if (!value) return;

      let id = null;
      let isValid = false;

      if (citiesList[name].length === 1) {
        const citiesArr = citiesList[name];
        if (
          searchRoutesForm[name + 'Field'].cityName.toLowerCase() ===
          citiesArr[0].name
        ) {
          isValid = true;
          id = citiesArr[0]._id;

          setSearchRoutesForm((state) => ({
            ...state,
            [name + 'Field']: { cityName: value, id, isValid },
          }));
        }
      }
    }, [value, name, citiesList]);
  }

  useValidity(searchRoutesForm.departureField.cityName, {
    name: 'departure',
  });
  useValidity(searchRoutesForm.arrivalField.cityName, {
    name: 'arrival',
  });

  function useDebounce(value, delay, { name }) {
    useEffect(() => {
      const handler = setTimeout(async () => {
        if (!value) return;
        
        const res = await getCities(value).unwrap();
        setCitiesList((state) => ({ ...state, [name]: res }));
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  }

  useDebounce(searchRoutesForm.departureField.cityName, 600, {
    name: 'departure',
  });
  useDebounce(searchRoutesForm.arrivalField.cityName, 600, { name: 'arrival' });

  // const dispatch = useDispatch();
  // const { departureDateField, arrivalDateField } = useSelector(
  //   (state) => state.routesSearch
  // );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const { id } = searchRoutesForm[name];
    const { isValid } = searchRoutesForm[name];
    setSearchRoutesForm((state) => {
      return {
        ...state,
        [name]: { cityName: value.toLowerCase().trim(), id, isValid },
      };
    });
    // setDepartureField(value);
    // switch (name) {
    //   case 'departureField':
    //     dispatch(changeDepartureInput({ value }));
    //     break;
    //   case 'arrivalField':
    //     dispatch(changeArrivalInput({ value }));
    //     break;

    //   default:
    //     break;
    // }
  };
  const handlePickerChange = (value, { name }) => {
    setSearchRoutesForm((state) => {
      return { ...state, [name]: value };
    });
    // switch (name) {
    //   case 'departureDateField':
    //     dispatch(changeDeparureDateInput({ value }));
    //     break;
    //   case 'arrivalDateField':
    //     dispatch(changeArrivalDateInput({ value }));
    //     break;

    //   default:
    //     break;
    // }
  };

  function setSelectedCity(item) {}

  return (
    <div className="booking_form">
      <div className="booking_form__title">
        <h1 className="booking_form__title_text">
          <span className="booking_form__title_text_row">Вся жизнь -</span>
          <span className="booking_form__title_text_subrow">путешествие!</span>
        </h1>
      </div>
      <form className="booking_form__form">
        <div className="booking_form__form_inputs">
          <div className="booking_form__form_inputs_group">
            <h3 className="booking_form__form_inputs_group_title">
              Направление
            </h3>
            <div className="booking_form__form_inputs_group_input_wrap">
              <input
                type="text"
                className="booking_form__form_inputs_group_input"
                placeholder="Откуда"
                name="departureField"
                value={searchRoutesForm.departureField.cityName}
                onChange={handleInputChange}
              />
              <LocaSvg className="input__icon" />
              {!searchRoutesForm.departureField.isValid && (
                <CitiesSelect cities={citiesList.departure} />
              )}
            </div>
            <button
              type="button"
              className="booking_form__form_inputs_group_btn"
            ></button>
            <div className="booking_form__form_inputs_group_input_wrap">
              <input
                type="text"
                className="booking_form__form_inputs_group_input"
                placeholder="Куда"
                name="arrivalField"
                value={searchRoutesForm.arrivalField.cityName}
                onChange={handleInputChange}
              />
              <LocaSvg className="input__icon" />
              {!searchRoutesForm.arrivalField.isValid && (
                <CitiesSelect cities={citiesList.arrival} />
              )}
            </div>
          </div>
          <div className="booking_form__form_inputs_group">
            <h3 className="booking_form__form_inputs_group_title">Дата</h3>
            <div className="booking_form__form_inputs_group_input_wrap">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                selected={searchRoutesForm.departureDateField}
                locale={ru}
                onChange={(date) =>
                  handlePickerChange(date, { name: 'departureDateField' })
                }
              />
              <DateSvg className="input__icon" />
            </div>
            <div className="booking_form__form_inputs_group_input_wrap">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                selected={searchRoutesForm.arrivalDateField}
                locale={ru}
                onChange={(date) =>
                  handlePickerChange(date, { name: 'arrivalDateField' })
                }
              />
              <DateSvg className="input__icon" />
            </div>
          </div>
        </div>
        <div className="booking_form__form_action">
          <button type="button" className="booking_form__form_action_btn">
            Найти билеты
          </button>
        </div>
      </form>
    </div>
  );
}
