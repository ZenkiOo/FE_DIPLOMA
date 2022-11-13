import { useState } from 'react';
import Coach from './Coach';

export default function Coaches(data) {
  const dataArray = Object.entries(data.coaches);
  const [activeTab, setActiveTab] = useState('0');
  console.log(dataArray);

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
  return (
    <>
      {dataArray.length > 0 && (
        <>
          <div>{tabTriggers}</div>
          <div>
            <Coach coach={data.coaches[activeTab]} />
          </div>
        </>
      )}
      {/* <div>{tabTriggers}</div>
      <div>
        {dataArray.length > 0 && <Coach coach={dataArray[activeTab][1]} />}
      </div> */}
    </>
  );
}
