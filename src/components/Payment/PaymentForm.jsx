import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/passengers';
import { useNavigate } from 'react-router-dom';
import PassengerInput from '../Passengers/PassengerInput';
import PaymentSelect from '../CustomSelect/PaymentSelect';

export default function PaymentForm() {
  const { user } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    watch,
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
    phone: {
      name: 'phone',
      label: 'Контактный телефон',
      error: errors?.phone,
      pattern: {
        value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        message: 'Неверный формат',
      },
    },
    email: {
      name: 'email',
      label: 'E-mail',
      error: errors?.email,
      pattern: {
        value:
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
        message: 'Неверный формат',
      },
    },
    payment_method: {
      name: 'payment_method',
      label: 'payment_method',
      error: errors?.payment_method,
      pattern: {
        value: /^[0-9]+$/i,
        message: 'Неверный формат',
      },
    },
  };

  function handleFormSubmit(data) {
    if (data) {
      dispatch(setUser({ user: data }));
      navigate('/checking');
    }
  }

  const formValues = watch();
  function isFormValid() {
    return (
      formValues.last_name.length > 0 &&
      formValues.first_name.length > 0 &&
      formValues.patronymic.length > 0 &&
      formValues.phone.length > 0 &&
      formValues.email.length > 0 &&
      formValues.email.length > 0 &&
      formValues.payment_method.length > 0
    );
  }
  const valid = isFormValid();

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
          disabled={!valid}
        >
          Купить билеты
        </button>
      </div>
    </div>
  );
}
