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
        active: true,
      })
    );
  }

  function removeValue(event) {
    const nextRoute = props.direction === 'departure' ? 'arrival' : 'departure';
    if (passengers[nextRoute].active) {
      dispatch(
        setAdultStatus({ route: nextRoute, adultStatus: null, active: false })
      );
    }
    if (passengers[props.direction].adultStatus !== event.target.value) return;
    dispatch(
      setAdultStatus({
        route: props.direction,
        adultStatus: null,
        active: false,
      })
    );
  }

  const labels = [
    {
      id: 0,
      value: 'adult',
      text: 'Взрослых - 0',
      subtext: 'Можно добавить еще 3 пассажиров ',
    },
    {
      id: 1,
      value: 'child',
      text: 'Дестких - 0',
      subtext:
        'Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%',
    },
    {
      id: 2,
      value: 'child_no_seat',
      text: 'Детских «без места» - 0',
      subtext: 'Можно добавить 1 место',
    },
  ];

  const labelsList = labels.map((label) => {
    return (
      <label
        key={label.id}
        disabled={label.id === 2}
        onClick={removeValue}
        className="count_label"
      >
        {label.id !== 2 && (
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
        )}
        <div className="count_item">
          <span className="count_item__text">{label.text}</span>
          <p className="count_item__subtext">{label.subtext}</p>
          {label.value === 'child_no_seat' && (
            <button className="count_item__btn" type="button">
              Добавить
            </button>
          )}
        </div>
      </label>
    );
  });
  return (
    <>
      <form className="pass_counter">{labelsList}</form>
    </>
  );
}
