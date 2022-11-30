import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NextBtn({ arrival }) {
  const passengers = useSelector((state) => state.passengers);
  const navigate = useNavigate();

  function handleNextClick() {
    navigate('/passengers');
  }

  function isDisabled() {
    if (passengers.departure.seats.length > 0) {
      if (arrival) {
        if (passengers.arrival.seats.length > 0) return false;
        else return true;
      }
      return false;
    } else return true;
  }

  const disabledBtn = isDisabled();

  return (
    <div className="next_btn_container">
      <button
        className="routes_next_btn"
        type="button"
        onClick={handleNextClick}
        disabled={disabledBtn && 'disabled'}
      >
        Далее
      </button>
    </div>
  );
}
