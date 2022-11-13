import { useState } from 'react';
import Coach from './Coach';
import './css/coaches.scss'

export default function Coaches(data) {
  const dataArray = Object.entries(data.coaches);
  const [activeTab, setActiveTab] = useState('0');

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
  // console.log(data?.coaches[activeTab].coach.class_type);
  const coachMap = createCoach(data.coaches[activeTab]?.coach.class_type);
  return (
    <>
      {dataArray.length > 0 && (
        <>
          <div>{tabTriggers}</div>
          <div>
            <Coach coach={data.coaches[activeTab]} map={coachMap} />
          </div>
        </>
      )}
    </>
  );
}
