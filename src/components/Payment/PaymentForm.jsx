import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import PassengerInput from '../Passengers/PassengerInput';
import PaymentSelect from '../CustomSelect/PaymentSelect';

export default function PaymentForm() {
  // const fakePassenger = {
  //   user: {
  //     first_name: '',
  //     last_name: '',
  //     patronymic: '',
  //     phone: '',
  //     email: '',
  //     payment_method: '',
  //   },
  //   departure: {
  //     route_direction_id: '123431',
  //     seats: [
  //       {
  //         coach_id: '12341',
  //         person_info: {
  //           is_adult: true,
  //           first_name: 'Ivan',
  //           last_name: 'Popov',
  //           patronymic: 'Popovich',
  //           gender: true,
  //           birthday: '1980-01-01',
  //           document_type: 'паспорт',
  //           document_data: '45 6790195',
  //         },
  //         seat_number: 10,
  //         is_child: true,
  //         include_children_seat: true,
  //       },
  //     ],
  //   },
  // };
  const { user } = useSelector((state) => state.passengers);
  const defaultValues = {
    last_name: user?.last_name,
    first_name: user?.first_name,
    patronymic: user?.patronymic,
    phone: user?.phone,
    email: user?.email,
    payment_method: user?.payment_method,
  };
  const {
    handleSubmit,
    register,
    reset,
    watch,
    control,
    trigger,
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
    phone: {
      name: 'phone',
      label: 'Контактный телефон',
      error: errors?.patronymic,
      pattern: {
        value: /^[0-9]+$/i,
        message: 'Неверный формат',
      },
    },
    email: {
      name: 'email',
      label: 'E-mail',
      error: errors?.patronymic,
      pattern: {
        value: /^[0-9]+$/i,
        message: 'Неверный формат',
      },
    },
    payment_method: {
      name: 'payment_method',
      label: 'payment_method',
      error: errors?.patronymic,
      pattern: {
        value: /^[0-9]+$/i,
        message: 'Неверный формат',
      },
    },
  };
  function handleFormSubmit(data) {
    console.log(data);
  }
  return (
    <div className="payment">
      <form className="pass">
        <h2 className="pass__title">Персональные данные</h2>
        <div className="pass__container pass__container--contacts">
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
        </div>
        <div className="pass__container pass__container--phone">
          <PassengerInput
            register={register}
            name="phone"
            label={inputs.phone.label}
            pattern={inputs.phone.pattern}
            error={inputs.phone.error}
          />
        </div>
        <div className="pass__container pass__container--email">
          <PassengerInput
            register={register}
            name="email"
            label={inputs.email.label}
            pattern={inputs.email.pattern}
            error={inputs.email.error}
          />
        </div>
        <h2 className="pass__title">Способ оплаты</h2>
        <div className="pass__container pass__container--payment">
          <PaymentSelect {...{ user, register }} />
        </div>
      </form>
      <div className="payment__action">
        <button
          className="payment__action_btn"
          onClick={handleSubmit((data) => handleFormSubmit(data))}
        >
          Купить билеты
        </button>
      </div>
    </div>
  );
}
