import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetCitiesByNameQuery } from '../../store/api';

import { setForm } from '../../store/slices/routesParams';
import { useDispatch } from 'react-redux';

import { ReactComponent as LocaSvg } from '../../images/icons/svg/loca.svg';
import { ReactComponent as DateSvg } from '../../images/icons/svg/date.svg';

import CitiesSelect from './CitiesSelect';
import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function BookingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getCities] = useLazyGetCitiesByNameQuery();

  const initialFormState = {
    depField: { cityName: '', id: '', isValid: false },
    arrField: { cityName: '', id: '', isValid: false },
    depDateField: '',
    arrDateField: '',
  };
  const initialListState = {
    dep: [],
    arr: [],
  };

  const [rlyForm, setSearchRoutesForm] = useState({ ...initialFormState });
  const [citiesList, setCitiesList] = useState({ ...initialListState });

  function useValidity(value, { name }) {
    useEffect(() => {
      if (!value) return;

      let id = '';
      let isValid = false;

      if (citiesList[name].length === 1) {
        const citiesArr = citiesList[name];
        if (
          rlyForm[name + 'Field'].cityName.toLowerCase() === citiesArr[0].name
        ) {
          isValid = true;
          id = citiesArr[0]._id;
        }
      }

      setSearchRoutesForm((state) => ({
        ...state,
        [name + 'Field']: { cityName: value, id, isValid },
      }));
    }, [value, name, citiesList]);
  }

  useValidity(rlyForm.depField.cityName, { name: 'dep' });
  useValidity(rlyForm.arrField.cityName, { name: 'arr' });

  function useDebounce(value, delay, { name }) {
    useEffect(() => {
      const handler = setTimeout(async () => {
        if (!value) {
          setCitiesList((state) => ({ ...state, [name]: [] }));
          return;
        }

        const res = await getCities(value, { preferCacheValue: true }).unwrap();
        setCitiesList((state) => ({ ...state, [name]: res }));
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  }

  useDebounce(rlyForm.depField.cityName, 600, { name: 'dep' });
  useDebounce(rlyForm.arrField.cityName, 600, { name: 'arr' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const { id } = rlyForm[name];
    const { isValid } = rlyForm[name];
    setSearchRoutesForm((state) => ({
      ...state,
      [name]: { cityName: value.toLowerCase().trim(), id, isValid },
    }));
  };

  const handlePickerChange = (value, { name }) => {
    setSearchRoutesForm((state) => ({
      ...state,
      [name]: value + 3 * 60 * 60 * 1000,
    }));
  };

  const handleCitySelect = (value, { name }) => {
    setSearchRoutesForm((state) => ({
      ...state,
      [name]: { ...rlyForm[name], cityName: value },
    }));
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    const params = {
      from_city_id: rlyForm.depField.id,
      to_city_id: rlyForm.arrField.id,
      date_start: rlyForm.depDateField
        ? new Date(rlyForm.depDateField).toISOString().substring(0, 10)
        : null,
      date_end: rlyForm.arrDateField
        ? new Date(rlyForm.arrDateField).toISOString().substring(0, 10)
        : null,
    };

    dispatch(setForm({ ...params }));
    // setSearchRoutesForm({ ...initialFormState });
    // setCitiesList({ ...initialListState });

    navigate('routes');
  }

  return (
    <div className="booking_form">
      <div className="booking_form__title">
        <h1 className="booking_form__title_text">
          <span className="booking_form__title_text_row">Вся жизнь -</span>
          <span className="booking_form__title_text_subrow">путешествие!</span>
        </h1>
      </div>
      <form
        className="booking_form__form"
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
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
                name="depField"
                value={rlyForm.depField.cityName}
                onChange={handleInputChange}
              />
              <LocaSvg className="input__icon" />
              {!rlyForm.depField.isValid && (
                <CitiesSelect
                  selectName={'depField'}
                  onSelect={handleCitySelect}
                  cities={citiesList.dep}
                />
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
                name="arrField"
                value={rlyForm.arrField.cityName}
                onChange={handleInputChange}
              />
              <LocaSvg className="input__icon" />
              {!rlyForm.arrField.isValid && (
                <CitiesSelect
                  selectName={'arrField'}
                  onSelect={handleCitySelect}
                  cities={citiesList.arr}
                />
              )}
            </div>
          </div>
          <div className="booking_form__form_inputs_group">
            <h3 className="booking_form__form_inputs_group_title">Дата</h3>
            <div className="booking_form__form_inputs_group_input_wrap">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                selected={rlyForm.depDateField}
                locale={ru}
                onChange={(date) =>
                  handlePickerChange(+date, { name: 'depDateField' })
                }
              />
              <DateSvg className="input__icon" />
            </div>
            <div className="booking_form__form_inputs_group_input_wrap">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                selected={rlyForm.arrDateField}
                locale={ru}
                onChange={(date) =>
                  handlePickerChange(+date, { name: 'arrDateField' })
                }
              />
              <DateSvg className="input__icon" />
            </div>
          </div>
        </div>
        <div className="booking_form__form_action">
          {/* <GetRoutesButton /> */}
          <button type="submit" className="booking_form__form_action_btn">
            Найти билеты
          </button>
        </div>
      </form>
    </div>
  );
}
