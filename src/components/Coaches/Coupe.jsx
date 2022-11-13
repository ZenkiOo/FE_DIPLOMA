import Seat from './Seat';

export default function Coupe({ seats, type }) {
  const firstSeatsList = seats.map((seat, i) => {

    return <Seat key={i} index={seat.index} />;
  });
  return (
    <>
      <div className={`rly_coach__coupe rly_coach__coupe--${type}`}>
        {firstSeatsList}
      </div>
    </>
  );
}
