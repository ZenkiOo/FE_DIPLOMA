import { useGetRouteQuery } from '../../store/api';
import { useSelector } from 'react-redux';
import Coaches from '../Coaches/Coaches';
import PassengersCounter from '../Coaches/PassengersCounter';
import CoachesBackBtn from '../Coaches/CoachesBackBtn';
const queryString = require('query-string');

export default function WithCoach(Component, name) {
  const state = useSelector((state) => state.routesParams);
  const id = state.routes[name].departure._id;
  const params = queryString.stringify(state.coaches[name], {
    skipNull: true,
  });
  const { data = [] } = useGetRouteQuery({ id, params });

  return (props) => {
    return (
      <>
        <CoachesBackBtn {...{ name }} />
        <Component {...props} />
        <PassengersCounter direction={name} id={id} />
        <Coaches coaches={data} direction={name} />
      </>
    );
  };
}
