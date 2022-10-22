import { useSelector, useDispatch } from 'react-redux';
// import {
//   changeDepartureInput,
//   changeArrivalInput,
//   changeDeparureDateInput,
//   changeArrivalDateInput,
// } from '../../reducers/routesSearch';
import {
  changeDepartureInput,
  changeArrivalInput,
  changeDeparureDateInput,
  changeArrivalDateInput,
} from '../../reducers/routesSearch';

import { ReactComponent as LocaSvg } from '../../images/icons/svg/loca.svg';
import { ReactComponent as DateSvg } from '../../images/icons/svg/date.svg';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function BookingForm() {
  const dispatch = useDispatch();
  const { departureField, arrivalField, departureDateField, arrivalDateField } =
    useSelector((state) => state.routesSearch);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'departureField':
        dispatch(changeDepartureInput({ value }));
        break;
      case 'arrivalField':
        dispatch(changeArrivalInput({ value }));
        break;

      default:
        break;
    }
  };
  const handlePickerChange = (value, { name }) => {
    switch (name) {
      case 'departureDateField':
        dispatch(changeDeparureDateInput({ value }));
        break;
      case 'arrivalDateField':
        dispatch(changeArrivalDateInput({ value }));
        break;

      default:
        break;
    }
  };

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
                value={departureField}
                onChange={handleInputChange}
              />
              <LocaSvg className="input__icon" />
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
                value={arrivalField}
                onChange={handleInputChange}
              />
              <LocaSvg className="input__icon" />
            </div>
          </div>
          <div className="booking_form__form_inputs_group">
            <h3 className="booking_form__form_inputs_group_title">Дата</h3>
            <div className="booking_form__form_inputs_group_input_wrap">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                selected={departureDateField}
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
                name="arrivalDateField"
                selected={arrivalDateField}
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
