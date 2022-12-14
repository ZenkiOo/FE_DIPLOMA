import { addPersonInfo, setConfirmed } from '../../store/slices/passengers';
import Select from '../CustomSelect/Select';
import PassengerInput from './PassengerInput';
import GenderSelect from '../CustomSelect/GenderSelect';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function Passenger({ seat, index }) {
  const { activeTab } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  const defaultValues = {
    age: seat.is_child,
    last_name: seat.person_info?.last_name,
    first_name: seat.person_info?.first_name,
    patronymic: seat.person_info?.patronymic,
    gender: +seat.person_info?.gender,
    birthday: seat.person_info?.birthday,
    document_series: seat.person_info?.document_series,
    document_number: seat.person_info?.document_number,
  };

  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
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
    document_number: {
      name: 'document_number',
      label: 'Номер',
      error: errors?.document_number,
      pattern: {
        value: /^([0-9]{6})?$/,
        message: 'Неверный формат',
      },
    },
  };

  function handleFormSubmit(data) {
    dispatch(
      addPersonInfo({
        route: activeTab,
        id: seat.id,
        person_info: {
          first_name: data.first_name,
          last_name: data.last_name,
          patronymic: data.patronymic,
          gender: data.gender,
          birthday: data.birthday,
          document_series: data.document_series,
          document_number: data.document_number,
          document_type: +data.age === 0 ? 'паспорт' : 'свидетельство',
          document_data:
            +data.age === 0
              ? `${data.document_series}${data.document_number}`
              : data.document_data,
        },
      })
    );
    dispatch(
      setConfirmed({
        route: activeTab,
        id: seat.id,
        confirmed: true,
      })
    );
  }

  const watchForm = watch();
  useEffect(() => {
    watch(() => {
      if (seat.confirmed) {
        dispatch(
          setConfirmed({
            route: activeTab,
            id: seat.id,
            confirmed: false,
          })
        );
      }
    });
  }, [watchForm]);

  return (
    <form
      className="pass"
      onSubmit={handleSubmit((data) => handleFormSubmit(data))}
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
            name="document_number"
            label={inputs.document_number.label}
            error={inputs.document_number.error}
            pattern={inputs.document_number.pattern}
          />
        </div>
      </div>
      <div className="pass__container">
        <button type="submit" className="pass__submit_btn">
          {!seat.confirmed ? 'Подтвердить' : 'Подтвержден'}
        </button>
      </div>
      {errors?.last_name && <p>{errors.last_name.message}</p>}
    </form>
  );
}
