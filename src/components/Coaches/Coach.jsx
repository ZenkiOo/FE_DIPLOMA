import React from 'react';
import Coupe from './Coupe';

export default function Coach({ coach, map }) {
  const coupesList = map.map((coupe, i) => {
    // console.log(coupe);
    return <Coupe key={i} seats={coupe} type={coach.coach.class_type} />;
  });
  return (
    <>
      <div style={{ marginBottom: 40 + 'px'}}>
        {coach.coach.class_type}
      </div>
      <div className={`coach coach--${coach.coach.class_type}`}>
        {coupesList}
      </div>
    </>
  );
}
