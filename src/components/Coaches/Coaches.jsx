import { useState } from 'react';
import { useSelector } from 'react-redux';
import Coach from './Coach';
import CoachesType from './CoachesType';

export default function Coaches({ coaches, direction }) {
  const dataArray = Object.entries(coaches);
  const [activeTab, setActiveTab] = useState('0');
  const isActive = useSelector((state) => state.passengers[direction].active);

  const handleTriggerClick = (name) => {
    setActiveTab(name);
  };

  const tabTriggers = dataArray.map((coach) => {
    const name = coach[0];
    const currCoach = coach[1];
    return (
      <button
        key={name}
        className="tab_trigger_btn"
        type="button"
        onClick={() => handleTriggerClick(name)}
      >
        {currCoach.coach.name}
      </button>
    );
  });

  function createCoach(type) {
    const coach = [];
    let j = 1;
    if (type === 'first') {
      for (let i = 1; i <= 8; i++) {
        coach.push([
          { index: j, avaliable: true },
          { index: j + 1, avaliable: true },
        ]);
        j = j + 2;
      }
    }
    if (type === 'second') {
      for (let i = 1; i <= 8; i++) {
        coach.push([
          { index: j, avaliable: true },
          { index: j + 2, avaliable: true },
          { index: j + 1, avaliable: true },
          { index: j + 3, avaliable: true },
        ]);
        j = j + 4;
      }
    }
    if (type === 'third') {
      for (let i = 1; i <= 16; i++) {
        if (i < 9) {
          coach.push([
            { index: j, avaliable: true },
            { index: j + 2, avaliable: true },
            { index: j + 1, avaliable: true },
            { index: j + 3, avaliable: true },
          ]);
          j = j + 4;
        } else {
          coach.push([
            { index: j, avaliable: true },
            { index: j + 1, avaliable: true },
          ]);
          j = j + 2;
        }
      }
    }
    if (type === 'fourth') {
      for (let i = 1; i <= 8; i++) {
        coach.push([
          { index: j, avaliable: true },
          { index: j + 2, avaliable: true },
          { index: j + 1, avaliable: true },
          { index: j + 3, avaliable: true },
          { index: j + 4, avaliable: true },
          { index: j + 5, avaliable: true },
          { index: j + 6, avaliable: true },
          { index: j + 7, avaliable: true },
        ]);
        j = j + 8;
      }
    }

    return coach;
  }

  const coachMap = createCoach(coaches[activeTab]?.coach.class_type);

  return (
    <div className="coaches">
      <CoachesType
        activeType={coaches[activeTab]?.coach.class_type}
        active={isActive}
      />
      {isActive && dataArray.length > 0 && (
        <>
          <div>{tabTriggers}</div>
          <div className="coaches__coach">
            <Coach coach={coaches[activeTab]} map={coachMap} />
          </div>
        </>
      )}
    </div>
  );
}
