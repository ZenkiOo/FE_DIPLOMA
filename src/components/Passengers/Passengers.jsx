import { useSelector } from 'react-redux';
import Passenger from './Passenger';
import PassengersNextBtn from './PassengersNextBtn';
import { nanoid } from 'nanoid';

export default function Passengers() {
  const state = useSelector((state) => state.passengers);
  const activeTab = state.activeTab;
  const passengers = state[activeTab].seats;
  const passengersList = passengers.map((passenger, i) => (
    <Passenger seat={passenger} key={nanoid()} index={i} />
  ));
  return (
    <div className="passengers">
      {passengersList}
      <div className="passengers__action">
        <PassengersNextBtn />
      </div>
    </div>
  );
}
