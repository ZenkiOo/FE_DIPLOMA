import { setActiveTab } from '../../store/slices/passengers';
import { useSelector, useDispatch } from 'react-redux';
import DirectionIcon from '../DirectionIcon/DirectionIcon';

export default function DirectionBtn({ direction, disabled }) {
  const { params } = useSelector((state) => state.routesParams.routes);
  const dispatch = useDispatch();
  const selected_date =
    direction === 'departure' ? params.date_start : params.date_end;

  return (
    <div className="dir_btn">
      <button
        className="dir_btn__button"
        disabled={disabled ? true : false}
        onClick={() => dispatch(setActiveTab({ route: direction }))}
      >
        <DirectionIcon {...{ direction }} />
        <span className="dir_btn__button_text">
          {direction === 'departure' ? 'Туда' : 'Обратно'}
        </span>
        <span className="dir_btn__button_date">{selected_date}</span>
        <span className="dir_btn__button_icon"></span>
      </button>
    </div>
  );
}
