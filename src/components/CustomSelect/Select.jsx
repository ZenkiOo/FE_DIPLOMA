import './select.scss'
import { useState } from 'react';

export default function Select({ register }) {
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState(0);

  const names = {
    0: 'Взрослый',
    1: 'Детский',
  };

  return (
    <div className="rhf_select">
      <button
        className="rhf_select__trigger"
        type="button"
        onClick={() => setActive(!isActive)}
      >
        <span className="rhf_select__trigger_text">{names[value]}</span>
        <span className="rhf_select__trigger_arrow"></span>
      </button>
      {isActive && (
        <div className="rhf_select__body">
          <label className="rhf_select__label">
            <input
              className="input"
              {...register('age')}
              type="radio"
              value={0}
              onChange={() => setValue(0)}
              defaultChecked={value === 0}
            />
            <span className="rhf_select__btn">{names[0]}</span>
          </label>
          <label className="rhf_select__label">
            <input
              className="input"
              {...register('age')}
              type="radio"
              value={1}
              onChange={() => setValue(1)}
            />
            <span className="rhf_select__btn">{names[1]}</span>
          </label>
        </div>
      )}
    </div>
  );
}
