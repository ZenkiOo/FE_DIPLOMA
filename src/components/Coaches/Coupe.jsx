import Seat from './Seat';

export default function Coupe({ seats, type }) {
  const firstSeatsList = seats.map((seat, i) => {

    return <Seat key={i} index={seat.index} />;
  });
  return (
    <>
      <div className={`coach__coupe coach__coupe--${type}`}>
        {firstSeatsList}
      </div>
    </>
  );
}
