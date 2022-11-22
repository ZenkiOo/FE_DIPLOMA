import React from 'react';
import Coupe from './Coupe';
import CoachSeatsInfo from './CoachSeatsInfo';

export default function Coach({ direction, coach, map, id }) {
  const coupesList = map.map((coupe, i) => {
    return (
      <Coupe
        key={i}
        seats={coupe}
        type={coach.coach.class_type}
        coachId={coach.coach._id}
        direction={direction}
        number={`0${+id + 1}`}
      />
    );
  });
  return (
    <>
      <CoachSeatsInfo {...{ ...coach, id: `0${+id + 1}`, direction }} />
      <div className="coach_wrap">
        <div className={`coach coach--${coach.coach.class_type}`}>
          {coupesList}
        </div>
      </div>
    </>
  );
}
