import { useGetRouteQuery } from '../../store/api';
import { useSelector } from 'react-redux';
import Coaches from '../Coaches/Coaches';
import PassengersCounter from '../Coaches/PassengersCounter';
import DirectionIcon from '../DirectionIcon/DirectionIcon';
const queryString = require('query-string');

export default function WithCoach(Component, name) {
  const state = useSelector((state) => state.routesParams);
  const id = state.routes[name].departure._id;
  const { data = {}, isLoading, isFetching, isError } = useGetRouteQuery(id);

  return (props) => {
    return (
      <>
        <label className="coaches_back_btn">
          <DirectionIcon direction={name}/>
          <button type="button" className="coaches_back_btn__btn">
            Выбрать другой поезд
          </button>
        </label>
        <Component {...props} />
        <PassengersCounter direction={name} id={id} />

        <Coaches coaches={data} direction={name}/>
      </>
    );
  };
}
