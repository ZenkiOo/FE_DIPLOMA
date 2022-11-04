import { useState } from 'react';

export default function CitiesSelect({ selectName, onSelect, cities }) {
  const [showValue, setShowValue] = useState('');

  const onCitySelect = (name) => onSelect(name, { name: selectName });
  const onCityHover = (name) => setShowValue(name);
  const onCityLeave = () => setShowValue('');

  const citiesList = cities.map((item) => {
    return (
      <li className="cities_select__item" key={item._id}>
        <button
          onClick={() => onCitySelect(item.name)}
          onMouseOver={() => onCityHover(item.name)}
          onMouseLeave={onCityLeave}
          className="cities_select__item_btn"
          type="button"
        >
          {item.name}
        </button>
      </li>
    );
  });
  return (
    <div className="cities_select">
      {showValue && (
        <div className="cities_select__placeholder">
          <span className="cities_select__placeholder_text">{showValue}</span>
        </div>
      )}
      <ul className="cities_select__list">{citiesList}</ul>
    </div>
  );
}
