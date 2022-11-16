import React from 'react';
import Coupe from './Coupe';

export default function Coach({ coach, map, id }) {
  const coupesList = map.map((coupe, i) => {
    // console.log(coupe);
    return <Coupe key={i} seats={coupe} type={coach.coach.class_type} />;
  });
  return (
    <>
      {/* {`0${+id + 1}`} */}
      <div className={`coach coach--${coach.coach.class_type}`}>
        {coupesList}
      </div>
    </>
  );
}
