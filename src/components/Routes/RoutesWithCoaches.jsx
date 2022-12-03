import '../Coaches/css/coaches.scss';
import { useSelector } from 'react-redux';
import Route from './Route';
import WithCoach from './WithCoach';
import NextBtn from '../NextBtn/NextBtn';

export default function RoutesWithCoaches() {
  const state = useSelector((state) => state.routesParams);

  function getArrivalRoute() {
    if (!state.routes.arrival.departure._id) return null;
    const ArrivalRouteWithCoach = WithCoach(Route, 'arrival');
    return (
      <div className="route_with_coaches route_with_coaches--arrival">
        <ArrivalRouteWithCoach route={state.routes.arrival} name="arrival" />
      </div>
    );
  }

  const DepartureRouteWithCoach = WithCoach(Route, 'departure');
  const arrivalRoute = getArrivalRoute();
  return (
    <>
      <div className="route_with_coaches route_with_coaches--departure">
        <DepartureRouteWithCoach
          route={state.routes.departure}
          name="departure"
        />
      </div>
      {arrivalRoute}
      <NextBtn arrival={arrivalRoute && true} />
    </>
  );
}
