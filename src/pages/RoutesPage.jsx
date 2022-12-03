import '../components/Routes/css/routes.scss';
import LastRoutes from '../components/LastRoutes/LastRoutes';
import AsideBar from '../components/AsideBar/AsideBar';
import RoutesHeader from '../components/Routes/RoutesHeader';
import Routes from '../components/Routes/Routes';
import RoutesPagination from '../components/Routes/RoutesPagination';
import RoutesWithCoaches from '../components/Routes/RoutesWithCoaches';

import { useSelector } from 'react-redux';
import { useGetRoutesQuery } from '../store/api';
const queryString = require('query-string');

export default function RoutesPage() {
  const state = useSelector((state) => state.routesParams);
  const { data = {}, isLoading } = useGetRoutesQuery(
    queryString.stringify(state.routes.params, { skipNull: true })
  );

  const allRoutes = isLoading
    ? 'Loading'
    : data.items && (
        <>
          {data.items.length > 0 ? (
            <>
              <Routes data={data.items} />
              <RoutesPagination
                total_count={
                  data.items?.length < 5 ? data.items.length : data.total_count
                }
              />
            </>
          ) : (
            'Таких направлений нет..'
          )}
        </>
      );
  return (
    <section className="routes_page">
      <div className="routes_page__container">
        <aside className="routes_page__aside">
          <AsideBar />
          <LastRoutes />
        </aside>
        <main className="routes_page__main">
          <RoutesHeader
            count={
              data.items?.length < 5 ? data.items.length : data.total_count
            }
          />
          {data.error && 'Что-то пошло не так...'}
          {state.routes.active ? allRoutes : <RoutesWithCoaches />}
        </main>
      </div>
    </section>
  );
}
