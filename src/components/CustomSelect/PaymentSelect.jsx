export default function PaymentSelect({ register }) {
  return (
    <div className="pay_select">
      <div className="pay_select__item">
        <input
          className="pay_select__item_input"
          {...register('payment_method')}
          type="radio"
          value={'online'}
          id={'radio_online'}
        />
        <label htmlFor="radio_online" className="pay_select__item_label">
          Онлайн
        </label>
        <ul className="pay_select__item_methods">
          <li className="pay_select__item_method pay_select__item_method--card">
            Банковской картой
          </li>
          <li className="pay_select__item_method pay_select__item_method--pal">
            PayPal
          </li>
          <li className="pay_select__item_method pay_select__item_method--visa">
            Visa QIWI Wallet
          </li>
        </ul>
      </div>
      <div className="pay_select__item">
        <input
          className="pay_select__item_input"
          {...register('payment_method')}
          type="radio"
          value={'cash'}
          id={'radio_cash'}
        />
        <label htmlFor="radio_cash" className="pay_select__item_label">
          Наличными
        </label>
      </div>
    </div>
  );
}
