import { useGetRouteQuery } from '../../store/api';
import { useSelector } from 'react-redux';
import Coaches from '../Coaches/Coaches';
import RouteBtn from '../RouteBtn/RouteBtn';
const queryString = require('query-string');

export default function WithCoach(Component, name) {
  const state = useSelector((state) => state.routesParams);
  const id = state.routes[name].departure._id;
  const { data = [], isLoading, isFetching, isError } = useGetRouteQuery(id);

  return (props) => {
    return (
      <>
        <RouteBtn direction={name}/>
        <Component {...props} />
        <Coaches coaches={data} />
      </>
    );
  };
}
