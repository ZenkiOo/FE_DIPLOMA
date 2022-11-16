import React from 'react';
import Coupe from './Coupe';
import CoachSeatsInfo from './CoachSeatsInfo';

export default function Coach({ coach, map, id }) {
  const coupesList = map.map((coupe, i) => {
    // console.log(coach);
    return <Coupe key={i} seats={coupe} type={coach.coach.class_type} />;
  });
  return (
    <>
      <CoachSeatsInfo {...{ ...coach, id: `0${+id + 1}` }} />
      <div className="coach_wrap">
        <div className={`coach coach--${coach.coach.class_type}`}>
          {coupesList}
        </div>
      </div>
    </>
  );
}
