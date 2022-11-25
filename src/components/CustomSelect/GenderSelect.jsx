import './select.scss';
import { useState } from 'react';

export default function GenderSelect({ register }) {
  const [isActive, setActive] = useState(0);
  function handleOptionChange(i) {
    setActive(i);
  }
  return (
    <div className="rhf_gender_select">
      <h4 className="passenger_input__label_text">Пол</h4>
      {/* <label
        className={[
          'rhf_gender_select__label',
          isActive === 0 ? 'rhf_gender_select__label--active' : '',
        ]
          .join(' ')
          .trim()}
      >
        <input
          className="rhf_gender_select__input"
          {...register('gender')}
          type="radio"
          value={0}
          onChange={() => handleOptionChange(0)}
          defaultChecked={true}
        />
        <span className="rhf_gender_select__btn">М</span>
      </label>
      <label
        className={[
          'rhf_gender_select__label',
          isActive === 1 ? 'rhf_gender_select__label--active' : '',
        ]
          .join(' ')
          .trim()}
      >
        <input
          className="rhf_gender_select__input"
          {...register('gender')}
          type="radio"
          value={1}
          onChange={() => handleOptionChange(1)}
        />
        <span className="rhf_gender_select__btn">Ж</span>
      </label> */}
      <div className="rhf_gender_select__body">
        <label className="rhf_gender_select__label">
          <input
            className="rhf_gender_select__input"
            {...register('gender')}
            type="radio"
            value={0}
            onChange={() => handleOptionChange(0)}
            defaultChecked={true}
          />
          <span className="rhf_gender_select__btn">М</span>
        </label>
        <label className="rhf_gender_select__label">
          <input
            className="rhf_gender_select__input"
            {...register('gender')}
            type="radio"
            value={1}
            onChange={() => handleOptionChange(1)}
          />
          <span className="rhf_gender_select__btn">Ж</span>
        </label>
      </div>
    </div>
  );
}
