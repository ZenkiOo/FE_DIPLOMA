export default function PassengerInput({ register, name, label }) {
  return (
    <label className="passenger_input">
      <h4 className="passenger_input__label_text">{label}</h4>
      <input
        type="text"
        className="passenger_input__curr"
        {...register(name, {
          required: 'required',
            // pattern: {
            //   value: /^([0-9]{2}[0-9]{2})?$/,
            //   message: 'invalid passport',
            // },
        })}
      />
    </label>
  );
}
