import { useSelector, useDispatch } from 'react-redux';
import { setRoutesParam } from '../../store/slices/routesParams';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function RoutesHeader({ count }) {
  const params = useSelector((state) => state.routesParams);
  const dispatch = useDispatch();

  const [sortActive, setSortActive] = useState(false);

  function getSortName(value) {
    const values = {
      null: 'времени',
      price: 'стоимости',
      duration: 'длительности',
    };
    return values[value];
  }

  function setSortName(value) {
    dispatch(setRoutesParam({ param: 'sort', value }));
    setSortActive(false);
  }

  function setLimit(value) {
    dispatch(setRoutesParam({ param: 'limit', value }));
  }
  const sortList = [
    { name: 'времени', param: null },
    { name: 'стоимости', param: 'price' },
    { name: 'длительности', param: 'duration' },
  ];

  return (
    <div className="routes_header">
      <div className="routes_header__item">
        <span className="routes_header__total-count">найдено {count}</span>
      </div>
      <div className="routes_header__item">
        <div className="routes_header__sort">
          <span className="routes_header__sort_text">сортировать по:</span>
          <div className="routes_header__sort_select">
            <div className="routes_header__sort_select_field">
              <span
                className="routes_header__sort_select_field_text"
                onClick={() => setSortActive(true)}
              >
                {getSortName(params.sort)}
              </span>
            </div>
            {sortActive && (
              <div className="routes_header__sort_select_items">
                {sortList.map((item) => (
                  <button
                    key={nanoid()}
                    className="routes_header__sort_select_item"
                    onClick={() => setSortName(item.param)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="routes_header__show">
          <span className="routes_header__show_text">показывать по:</span>
          <button
            className={[
              'routes_header__show_btn',
              params.limit === null
                ? 'routes_header__show_btn--active'
                : 'routes_header__show_btn--default',
            ].join(' ')}
            onClick={() => setLimit(null)}
          >
            5
          </button>
          <button
            className={[
              'routes_header__show_btn',
              params.limit === 10
                ? 'routes_header__show_btn--active'
                : 'routes_header__show_btn--default',
            ].join(' ')}
            onClick={() => setLimit(10)}
          >
            10
          </button>
          <button
            className={[
              'routes_header__show_btn',
              params.limit === 20
                ? 'routes_header__show_btn--active'
                : 'routes_header__show_btn--default',
            ].join(' ')}
            onClick={() => setLimit(20)}
          >
            20
          </button>
        </div>
      </div>
    </div>
  );
}
