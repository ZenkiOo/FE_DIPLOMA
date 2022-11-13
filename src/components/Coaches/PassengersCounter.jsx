import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAdultStatus } from '../../store/slices/passengers';

export default function PassengersCounter(props) {
  const passengers = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  function changeValue(event) {
    let adultStatus;
    const { value } = event.target;
    const route = passengers[props.direction];

    if (route.adultStatus === value) adultStatus = null;
    else if (route.adultStatus !== value) adultStatus = event.target.value;

    dispatch(setAdultStatus({ route: props.direction, adultStatus }));
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
      >
        <input
          type="radio"
          name="radio"
          value={label.value}
          checked={
            label.value === passengers[props.direction].adultStatus
              ? true
              : false
          }
          onClick={changeValue}
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
