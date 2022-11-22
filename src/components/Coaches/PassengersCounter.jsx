import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAdultStatus } from '../../store/slices/passengers';

export default function PassengersCounter(props) {
  // fetch('https://netology-trainbooking.netoservices.ru/order', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     user: {
  //       first_name: 'Иван',
  //       last_name: 'Смирнов',
  //       patronymic: 'Олегович',
  //       phone: '8900123123',
  //       email: 'string@string.ru',
  //       payment_method: 'cash', // или online
  //     },
  //     departure: {
  //       route_direction_id: '123431',
  //       seats: [
  //         {
  //           coach_id: '12341',
  //           person_info: {
  //             is_adult: 'false',
  //             first_name: 'Ivan',
  //             last_name: 'Popov',
  //             patronymic: 'Popovich',
  //             gender: 'true',
  //             birthday: '1980-01-01',
  //             document_type: 'паспорт',
  //             document_data: '45 6790195',
  //           },
  //           seat_number: '-1',
  //           is_child: 'true',
  //           include_children_seat: 'true',
  //         },
  //       ],
  //     },
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log('data', data));
  // console.log(
  //   JSON.stringify({
  //     user: {
  //       first_name: 'Иван',
  //       last_name: 'Смирнов',
  //       patronymic: 'Олегович',
  //       phone: '8900123123',
  //       email: 'string@string.ru',
  //       payment_method: 'cash',
  //     },
  //     departure: {
  //       route_direction_id: '123431',
  //       seats: [
  //         {
  //           coach_id: '12341',
  //           person_info: {
  //             is_adult: 'false',
  //             first_name: 'Ivan',
  //             last_name: 'Popov',
  //             patronymic: 'Popovich',
  //             gender: 'true',
  //             birthday: '1980-01-01',
  //             document_type: 'паспорт',
  //             document_data: '45 6790195',
  //           },
  //           seat_number: '-1',
  //           is_child: 'true',
  //           include_children_seat: 'true',
  //         },
  //       ],
  //     },
  //   })
  // );
  const passengers = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  function changeValue(event) {
    dispatch(
      setAdultStatus({
        route: props.direction,
        active: true,
        adultStatus: event.target.value,
        id: props.id,
      })
    );
    const nextRoute = props.direction === 'departure' ? 'arrival' : 'departure';
    if (passengers[nextRoute].active) {
      dispatch(
        setAdultStatus({
          route: nextRoute,
          adultStatus: null,
          active: false,
          id: passengers[nextRoute].route_direction_id,
        })
      );
    }
    if (passengers[props.direction].adultStatus !== event.target.value) return;
    dispatch(
      setAdultStatus({
        route: props.direction,
        adultStatus: null,
        active: false,
        id: props.id,
      })
    );
  }

  function removeValue(event) {
    
  }

  const labels = [
    {
      id: 0,
      value: 'adult',
      text: 'Взрослых - ',
      subtext: `Можно добавить еще ${4 - passengers[props.direction].seats.length} пассажиров `,
    },
    {
      id: 1,
      value: 'child',
      text: 'Дестких - ',
      subtext:
        `Можно добавить еще ${4 - passengers[props.direction].seats.length} детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%`,
    },
    {
      id: 2,
      value: 'child_no_seat',
      text: 'Детских «без места» - ',
      subtext: 'Можно добавить 1 место',
    },
  ];

  const labelsList = labels.map((label) => {
    return (
      <label key={label.id} className="count_label">
        {label.id !== 2 && (
          <input
            type="radio"
            name={`${props.direction}_radio_${label.id}`}
            value={label.value}
            disabled={
              label.id === 2 ||
              (label.id === 1 && passengers[props.direction].seats.length === 0)
            }
            checked={
              label.value === passengers[props.direction].adultStatus
                ? true
                : false
            }
            onChange={changeValue}
          />
        )}
        <div className="count_item">
          <span className="count_item__text">
            {label.text}

            {label.id !== 2 &&
              passengers[props.direction].seats.filter((seat) =>
                label.value === 'child' ? seat.is_child : !seat.is_child
              ).length}
          </span>
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
