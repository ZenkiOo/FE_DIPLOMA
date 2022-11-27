import Select from '../CustomSelect/Select';
import PassengerInput from './PassengerInput';
import GenderSelect from '../CustomSelect/GenderSelect';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function Passenger({ seat, index }) {
  // console.log(seat);
  // const seats = useSelector((state) => state.passengers[state.passengers.activeTab].seats)
  const [confirmed, setConfirmed] = useState(false);
  const defaultValues = {
    age: 0,
    last_name: '',
    first_name: '',
    patronymic: '',
    gender: true,
    birthday: new Date(),
    document_series: '',
    document_data: '',
  };

  const {
    handleSubmit,
    register,
    reset,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({ defaultValues });

  const inputs = {
    last_name: {
      name: 'last_name',
      label: 'Фамилия',
      error: errors?.last_name,
      pattern: {
        value: /^[a-zа-яё]+$/i,
        message: 'Неверный формат',
      },
    },
    first_name: {
      name: 'first_name',
      label: 'Имя',
      error: errors?.first_name,
      pattern: {
        value: /^[a-zа-яё]+$/i,
        message: 'Неверный формат',
      },
    },
    patronymic: {
      name: 'patronymic',
      label: 'Отчество',
      error: errors?.patronymic,
      pattern: {
        value: /^[a-zа-яё]+$/i,
        message: 'Неверный формат',
      },
    },
    gender: {
      name: 'gender',
      label: 'Пол',
    },
    birthday: {
      name: 'birthday',
      label: 'Дата рождения',
      pattern: {},
    },
    document_series: {
      name: 'document_series',
      label: 'Серия',
      pattern: {
        value: /^([0-9]{4})?$/,
        message: 'Неверный формат',
      },
      error: errors?.document_series,
    },
    document_data: {
      name: 'document_data',
      label: 'Номер',
      error: errors?.document_data,
      pattern: {
        value: /^([0-9]{6})?$/,
        message: 'Неверный формат',
      },
    },
  };

  const watchForm = watch();
  useEffect(() => {
    watch(() => {
      if (confirmed) setConfirmed(false);
    });
  }, [watchForm]);

  function handleFormSubmtit(data) {
    setConfirmed(true);
    console.log(data);
  }

  return (
    <form
      className="pass"
      onSubmit={handleSubmit((data) => handleFormSubmtit(data))}
    >
      <h2 className="pass__title">Пассажир {index + 1}</h2>

      <div className="pass__container">
        <div className="pass__age_select">
          <Select {...{ register, seat, index }} />
          <span className="pass__seat_info">
            Вагон:
            <span className="pass__seat_info_value">{seat.coachNumber}</span>,
            место:
            <span className="pass__seat_info_value">{seat.seat_number}</span>
          </span>
        </div>
        <div className="pass__names">
          <PassengerInput
            register={register}
            name="last_name"
            label={inputs.last_name.label}
            pattern={inputs.last_name.pattern}
            error={inputs.last_name.error}
          />
          <PassengerInput
            register={register}
            name="first_name"
            label={inputs.first_name.label}
            error={inputs.first_name.error}
          />
          <PassengerInput
            register={register}
            name="patronymic"
            label={inputs.patronymic.label}
            error={inputs.patronymic.error}
          />
        </div>
        <div className="pass__age">
          <div className="pass__age_gender_select">
            <GenderSelect register={register} />
          </div>
          <div className="pass__age_datepicker">
            <h4 className="passenger_input__label_text">Дата рождения</h4>
            <Controller
              name={'birthday'}
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  locale={ru}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="ДД/ММ/ГГ"
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="pass__container">
        <div className="pass__docs">
          <div className="pass__doctype">
            <span className="pass__doctype_label">Тип документа</span>
            <span className="pass__doctype_value">
              {!seat.is_child ? 'Паспорт РФ' : 'Свидетельство о рождении'}
            </span>
          </div>
          {!seat.is_child && (
            <PassengerInput
              register={register}
              name="document_series"
              label={inputs.document_series.label}
              error={inputs.document_series.error}
              pattern={inputs.document_series.pattern}
            />
          )}

          <PassengerInput
            register={register}
            name="document_data"
            label={inputs.document_data.label}
            error={inputs.document_data.error}
            pattern={inputs.document_data.pattern}
          />
        </div>
      </div>
      <div className="pass__container">
        <button type="submit" className="pass__submit_btn">
          {!confirmed ? 'Подтвердить' : 'Подтвержден'}
        </button>
      </div>
      {errors?.last_name && <p>{errors.last_name.message}</p>}
    </form>
  );
}
