import Route from './Route';
import WithCoach from './WithCoach';
import { useSelector } from 'react-redux';

export default function RoutesWithCoaches() {
  const DepartureRouteWithCoach = WithCoach(Route, 'departure');
  const ArrivalRouteWithCoach = WithCoach(Route, 'arrival');

  const state = useSelector((state) => state.routesParams);
  return (
    <>
      <div className="route_with_coaches">
        <DepartureRouteWithCoach
          route={state.routes.departure}
          name="departure"
        />
      </div>
      {state.routes.arrival.departure._id && (
        <div className="route_with_coaches">
          <ArrivalRouteWithCoach route={state.routes.arrival} name="arrival" />
        </div>
      )}
    </>
  );
}
