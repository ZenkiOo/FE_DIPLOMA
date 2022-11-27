import { useEffect, useState } from 'react';
export default function PassengerInput({
  register,
  name,
  label,
  pattern,
  error,
}) {
  // const patternValid =
  // const validLabel = errors
  //   ? errors[name]?.message
  //     ? errors[name]?.message
  //     : label
  //   : null;
  // console.log(errors);
  // try {
  //   const { message } = errors[name];
  //   console.log(message);
  // } catch (error) {
  //   // return;
  // }
  // const [error, setError] = useState('');
  // useEffect(() => {
  //   try {
  //     const { message } = errors[name];
  //     setError(message);
  //   } catch (err) {
  //     if (error) setError('');
  //   }
  //   console.log(error);
  // }, [errors]);

  return (
    <label
      className={[
        'passenger_input',
        `${error?.message ? 'passenger_input--error' : ''}`,
      ]
        .join(' ')
        .trim()}
    >
      <h4 className="passenger_input__label_text">
        {error?.message ? error.message : label}
      </h4>
      <input
        type="text"
        className="passenger_input__curr"
        {...register(name, {
          required: 'Обязательное поле',
          pattern,
        })}
      />
    </label>
  );
}
