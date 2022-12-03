export default function PassengerInput({
  register,
  name,
  label,
  pattern,
  error,
}) {
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
