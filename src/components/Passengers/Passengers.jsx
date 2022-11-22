import { useSelector } from 'react-redux';
import Passenger from './Passenger';

export default function Passengers() {
  const state = useSelector((state) => state.passengers);
  const activeTab = state.activeTab
  const passengers = state[activeTab].seats
  const passengersList = passengers.map((passenger) => {
    return(
      <Passenger seat={passenger} key={passenger.seat_number}/>
    )
  })
  return <div>{passengersList}</div>;
}
