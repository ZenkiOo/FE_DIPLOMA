import Select from '../CustomSelect/Select';
import { useForm, Controller } from 'react-hook-form';
import PassengerInput from './PassengerInput';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function Passenger({ seat, index }) {
  // console.log(seat);
  const inputs = {
    last_name: {
      name: 'last_name',
      label: 'Фамилия',
      pattern : {}
    },
    first_name: {
      name: 'first_name',
      label: 'Имя',
      pattern : {}
    },
    patronymic: {
      name: 'patronymic',
      label: 'Отчество',
      pattern : {}
    },
    gender: {
      name: 'gender',
      label: 'Пол',
    },
    birthday: {
      name: 'birthday',
      label: 'Дата рождения',
      pattern : {}
    },
    document_type: {
      name: 'document_type',
      label: 'Тип документа',
      pattern : {}
    },
    document_series: {
      name: 'document_series',
      label: 'Серия',
      pattern : {}
    },
    document_data: {
      name: 'document_data',
      label: 'Номер',
      pattern : {}
    },
  };
  const defaultValues = {
    age: 0,
    last_name: '',
    first_name: '',
    patronymic: '',
    gender: true,
    birthday: new Date(),
    document_type: '',
    document_series: '',
    document_data: '',
  };
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues });
  // console.log(errors);
  // const person_info = {
  //   is_adult: true,
  //   first_name: 'Ivan',
  //   last_name: 'Popov',
  //   patronymic: 'Popovich',
  //   gender: true,
  //   birthday: '1980-01-01',
  //   document_type: 'паспорт',
  //   document_data: '45 6790195',
  // };

  return (
    <form className="pass" onSubmit={handleSubmit((data) => console.log(data))}>
      <h2 className="pass__title">Пассажир {index + 1}</h2>
      <div className="pass__age_select">
        <Select register={register} />
      </div>
      <div className="pass__names">
        <PassengerInput
          register={register}
          name="last_name"
          label={inputs['last_name'].label}
        />
        <PassengerInput
          register={register}
          name="first_name"
          label={inputs['first_name'].label}
        />
        <PassengerInput
          register={register}
          name="patronymic"
          label={inputs['patronymic'].label}
        />
      </div>
      <div className="pass__age">
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
        <label>Дата Рождения</label>
      </div>
      <div className="pass__docs">
        <PassengerInput
          register={register}
          name="document_series"
          label={inputs['document_series'].label}
        />
        <PassengerInput
          register={register}
          name="document_data"
          label={inputs['document_data'].label}
        />
      </div>
      {errors?.last_name && <p>{errors.last_name.message}</p>}
      <button type="submit">v</button>
    </form>
  );
}
