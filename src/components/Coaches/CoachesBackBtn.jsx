import DirectionIcon from '../DirectionIcon/DirectionIcon';
import { useDispatch } from 'react-redux';
import { clearSeats } from '../../store/slices/passengers';
import { setRoutesActive } from '../../store/slices/routesParams';
export default function CoachesBackBtn({ name }) {
  const dispatch = useDispatch();

  const handleBack = () => {
    console.log('fd');
    dispatch(clearSeats());
    dispatch(setRoutesActive());
  };

  return (
    <div className="coaches_back_btn">
      <DirectionIcon direction={name} />
      <button
        type="button"
        className="coaches_back_btn__btn"
        onClick={() => handleBack()}
      >
        Выбрать другой поезд
      </button>
    </div>
  );
}
