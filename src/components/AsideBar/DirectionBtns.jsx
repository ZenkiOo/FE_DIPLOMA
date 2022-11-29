import { useSelector } from 'react-redux';
import DirectionBtn from './DirectionBtn';
import DirectionInfo from './DirectionInfo';

export default function DirectionBtns() {
  const state = useSelector((state) => state.passengers);
  const { activeTab, departure, arrival } = state;

  return (
    <div className="routes_details__direction_btns">
      {departure.seats.length > 0 && (
        <>
          <DirectionBtn direction={'departure'} />
          <DirectionInfo route={'departure'} />
          {/* {activeTab === 'departure' && <DirectionInfo route={'departure'} />} */}
        </>
      )}
      {arrival.seats.length > 0 && (
        <>
          <DirectionBtn direction={'arrival'} />
          <DirectionInfo route={'arrival'} />
          {/* {activeTab === 'arrival' && <DirectionInfo route={'arrival'} />} */}
        </>
      )}
    </div>
  );
}
