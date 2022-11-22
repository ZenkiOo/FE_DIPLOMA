import Seat from './Seat';

export default function Coupe({ seats, type, coachId, direction, number }) {
  const firstSeatsList = seats.map((seat, i) => {
    return (
      <Seat
        key={i}
        seat={seat}
        coachId={coachId}
        direction={direction}
        coachNumber={number}
      />
    );
  });
  return (
    <>
      <div className={`coach__coupe coach__coupe--${type}`}>
        {firstSeatsList}
      </div>
    </>
  );
}
