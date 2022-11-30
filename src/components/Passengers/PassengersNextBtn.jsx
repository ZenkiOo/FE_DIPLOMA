import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PassengersNextBtn() {
  const { arrival, departure } = useSelector((state) => state.passengers);
  const disabled = [...arrival.seats, ...departure.seats].find(
    (seat) => seat.confirmed === false
  );
  const navigate = useNavigate();
  return (
    <button
      className="passengers__action_btn"
      disabled={disabled ? true : false}
      onClick={() => navigate('/payment')}
    >
      Далее
    </button>
  );
}
