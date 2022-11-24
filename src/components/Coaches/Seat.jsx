import { addPassenger, deletePassenger } from '../../store/slices/passengers';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export default function Seat({ seat, coachId, coachNumber, direction }) {
  const dispatch = useDispatch();
  const { seats, adultStatus, coachOptions } = useSelector(
    (state) => state.passengers[direction]
  );
  const occupiedSeats = seats.map((occupiedSeat) =>
    occupiedSeat.coach_id === coachId ? occupiedSeat.seat_number : false
  );

  const childSeats = seats.map((childSeat) =>
    childSeat.is_child ? childSeat.seat_number : false
  );

  function handleSeatClick() {
    console.log(seat);
    if (occupiedSeats.length > 0 && occupiedSeats.includes(seat.index)) {
      dispatch(deletePassenger({ route: direction, index: seat.index }));
    } else {
      dispatch(
        addPassenger({
          route: direction,
          seat: {
            id: nanoid(),
            coach_id: coachId,
            seat_number: seat.index,
            is_child: adultStatus === 'child' && true,
            include_children_seat: false,
            top: seat.top,
            wifi: coachOptions.wifi,
            linens: coachOptions.linens,
            coachNumber,
          },
        })
      );
    }
  }
  return (
    <button
      onClick={handleSeatClick}
      disabled={
        !seat.available ||
        (seats.length > 3 && !occupiedSeats.includes(seat.index))
      }
      className={[
        'coach__seat',
        occupiedSeats.includes(seat.index) ? 'coach__seat--occupied' : '',
        childSeats.includes(seat.index) ? 'coach__seat--child' : '',
      ]
        .join(' ')
        .trim()}
    >
      {seat.index}
    </button>
  );
}
