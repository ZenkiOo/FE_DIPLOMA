import './select.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPassengerAge } from '../../store/slices/passengers';

export default function Select({ register, seat, index }) {
  const route = useSelector((state) => state.passengers.activeTab);
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  // const current = useSelector((state) => state[state.activeTab]?.seats[index])
  // const [value, setValue] = useState(0);

  const names = {
    0: 'Взрослый',
    1: 'Детский',
  };

  useEffect(() => {
    setActive(false);
  }, [seat]);

  function handleAgeSet(value) {
    dispatch(setPassengerAge({ route, id: seat.id, value }));
  }

  return (
    <div className="rhf_select">
      <button
        className="rhf_select__trigger"
        type="button"
        onClick={() => setActive(!isActive)}
      >
        <span className="rhf_select__trigger_text">
          {names[+seat.is_child]}
        </span>
        <span className="rhf_select__trigger_arrow"></span>
      </button>
      <div
        className="rhf_select__body"
        style={{ display: isActive ? 'block' : 'none' }}
      >
        <label className="rhf_select__label">
          <input
            className="rhf_select__input"
            {...register('age')}
            type="radio"
            value={0}
            onChange={() => handleAgeSet(false)}
            defaultChecked={+!seat.is_child}
          />
          <span className="rhf_select__btn">{names[0]}</span>
        </label>
        <label className="rhf_select__label">
          <input
            className="rhf_select__input"
            {...register('age')}
            type="radio"
            value={1}
            onChange={() => handleAgeSet(true)}
            defaultChecked={+seat.is_child}
          />
          <span className="rhf_select__btn">{names[1]}</span>
        </label>
      </div>
      {/* {isActive && (
        
      )} */}
    </div>
  );
}
