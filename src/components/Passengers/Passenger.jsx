import { useForm, Controller } from 'react-hook-form';

import DatePicker from 'react-datepicker';
import { setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
setDefaultLocale('ru', ru);

export default function Passenger({ seat }) {
  const defaultValues = {
    name: '',
    date: new Date(),
  };
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form className="pass" onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="pass__title">Пассажир *</div>
      <section>
        <label>name:</label>
        <input className="input" {...register('name', { required: true })} />
      </section>
      <section>
        <label>React Datepicker</label>
        <Controller
          name={'date'}
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
      </section>
      {errors?.name && <p>required</p>}
      <button>v</button>
    </form>
  );
}
