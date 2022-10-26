import React from 'react';

export default function CitiesSelect({ cities }) {
  const citiesList = cities.map((item) => {
    return (
      <li className="cities_select__item" key={item._id}>
        <button className="cities_select__item_btn" type='button'>{item.name}</button>
      </li>
    );
  });
  return (
    <div className="cities_select">
      <ul className="cities_select__list">{citiesList}</ul>
    </div>
  );
}
