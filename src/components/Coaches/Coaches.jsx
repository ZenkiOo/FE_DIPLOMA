import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCoaches } from '../../store/slices/passengers';
import Coach from './Coach';
import CoachesType from './CoachesType';

export default function Coaches({ coaches, direction }) {
  const isActive = useSelector((state) => state.passengers[direction].active);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('0');

  useEffect(() => {
    dispatch(
      setCoaches({
        route: direction,
        coaches: [...coaches.map((coach) => ({ ...coach.coach }))],
      })
    );
  }, [coaches]);

  const handleTriggerClick = (i) => {
    setActiveTab(i);
  };

  const dataArray = Object.entries(coaches);
  const tabTriggers = dataArray.map((coach) => {
    const i = coach[0];
    return (
      <button
        key={i}
        className={`tab_trigger_btn ${
          +i === +activeTab
            ? 'tab_trigger_btn--active'
            : 'tab_trigger_btn--default'
        }`}
        type="button"
        onClick={() => handleTriggerClick(i)}
      >
        {`0${+i + 1}`}
      </button>
    );
  });

  function createCoach(type, index, data) {
    const available = (z) =>
      data[index].seats[z - 1] ? data[index].seats[z - 1].available : false;

    const coach = [];
    let j = 1;
    if (type === 'first') {
      for (let i = 1; i <= 8; i++) {
        coach.push([
          { index: j, available: available(j), top: false },
          { index: j + 1, available: available(j + 1), top: false },
        ]);
        j = j + 2;
      }
    }
    if (type === 'second') {
      for (let i = 1; i <= 8; i++) {
        coach.push([
          { index: j + 1, available: available(j + 1), top: true },
          { index: j + 3, available: available(j + 3), top: true },
          { index: j, available: available(j), top: false },
          { index: j + 2, available: available(j + 2), top: false },
        ]);
        j = j + 4;
      }
    }
    if (type === 'third') {
      for (let i = 1; i <= 16; i++) {
        if (i < 9) {
          coach.push([
            { index: j + 1, available: available(j + 1), top: true },
            { index: j + 3, available: available(j + 3), top: true },
            { index: j, available: available(j), top: false },
            { index: j + 2, available: available(j + 2), top: false },
          ]);
          j = j + 4;
        } else {
          coach.push([
            { index: j, available: available(j), top: false },
            { index: j + 1, available: available(j + 1), top: true },
          ]);
          j = j + 2;
        }
      }
    }
    if (type === 'fourth') {
      for (let i = 1; i <= 8; i++) {
        coach.push([
          { index: j + 3, available: available(j + 3), top: false },
          { index: j + 7, available: available(j + 7), top: false },
          { index: j + 2, available: available(j + 2), top: false },
          { index: j + 6, available: available(j + 6), top: false },
          { index: j + 1, available: available(j + 1), top: false },
          { index: j + 5, available: available(j + 5), top: false },
          { index: j, available: available(j), top: false },
          { index: j + 4, available: available(j + 4), top: false },
        ]);
        j = j + 8;
      }
    }

    return coach;
  }

  const coachMap = createCoach(
    coaches[activeTab]?.coach.class_type,
    activeTab,
    coaches
  );

  return (
    <div className="coaches">
      <CoachesType
        activeType={coaches[activeTab]?.coach.class_type}
        active={isActive}
      />
      {isActive && coaches.length > 0 && (
        <>
          <div className="coaches__list">
            <div className="coaches__list_coaches">
              <span className="coaches__list_text">Вагоны</span>
              {tabTriggers}
            </div>
            <span className="coaches__list_text coaches__list_text--num">
              Нумерация вагонов начинается с головы поезда
            </span>
          </div>
          <div className="coaches__coach">
            <Coach
              coach={coaches[activeTab]}
              map={coachMap}
              id={activeTab}
              direction={direction}
            />
          </div>
        </>
      )}
    </div>
  );
}
