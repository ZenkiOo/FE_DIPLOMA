import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAdultStatus } from '../../store/slices/passengers';

export default function PassengersCounter(props) {
  const passengers = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  function changeValue(event) {
    dispatch(
      setAdultStatus({
        route: props.direction,
        adultStatus: event.target.value,
      })
    );
  }

  function removeValue(event) {
    if (passengers[props.direction].adultStatus !== event.target.value) return;
    dispatch(setAdultStatus({ route: props.direction, adultStatus: null }));
  }

  const labels = [
    {
      id: 0,
      value: 'adult',
    },
    {
      id: 1,
      value: 'child',
    },
    {
      id: 2,
      value: 'child_no_seat',
    },
  ];

  const labelsList = labels.map((label) => {
    return (
      <label
        style={{ width: 33.33 + '%', display: 'block', height: 100 + 'px' }}
        key={label.id}
        onClick={removeValue}
      >
        <input
          type="radio"
          name={`${props.direction}_radio_${label.id}`}
          value={label.value}
          checked={
            label.value === passengers[props.direction].adultStatus
              ? true
              : false
          }
          onChange={changeValue}
        />
      </label>
    );
  });
  return (
    <div>
      <form style={{ width: 100 + '%', display: 'flex' }}>{labelsList}</form>
    </div>
  );
}
