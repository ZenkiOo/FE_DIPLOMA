import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../../store/slices/passengers';

export default function DirectionBtns() {
  const state = useSelector((state) => state.passengers);
  const dispatch = useDispatch();
  return (
    <div>
      {state.departure.seats.length > 0 && <button onClick={() => dispatch(setActiveTab({route: 'departure'}))}>туда</button>}
      {state.arrival.seats.length > 0 && <button onClick={() => dispatch(setActiveTab({route: 'arrival'}))}>обратно</button>}
    </div>
  );
}
