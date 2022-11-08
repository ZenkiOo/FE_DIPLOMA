import './css/last_routes.scss';
import { useGetLastRoutesQuery } from '../../store/api';
import { nanoid } from 'nanoid';
import LastRoute from './LastRoute';

export default function LastRoutes() {
  const { data = [] } = useGetLastRoutesQuery();
  const lastRoutesList = data.map((route) => (
    <LastRoute route={route} key={nanoid()} />
  ));
  return (
    <div className="last_routes">
      <h2 className="last_routes__title">Последние билеты</h2>
      <ul className="last_routes__list">{data.length > 0 && lastRoutesList}</ul>
    </div>
  );
}
