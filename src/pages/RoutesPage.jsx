import '../components/Routes/css/routes.css';
import LastRoutes from '../components/LastRoutes/LastRoutes';
import AsideBar from '../components/AsideBar/AsideBar';
import RoutesHeader from '../components/Routes/RoutesHeader';
import Routes from '../components/Routes/Routes';
import RoutesPagination from '../components/Routes/RoutesPagination';
import WithCoach from '../components/Routes/WithCoach';
import Route from '../components/Routes/Route';

import { useSelector } from 'react-redux';
import { useGetRoutesQuery } from '../store/api';
const queryString = require('query-string');

export default function RoutesPage() {
  const { params } = useSelector((state) => state.routesParams);
  const { state } = useSelector((state) => state.routesParams);
  const {
    data = {},
    isLoading,
    isFetching,
    isError,
  } = useGetRoutesQuery(queryString.stringify(params, { skipNull: true }));

  const allRoutes = isLoading
    ? 'Loading'
    : data.items && (
        <>
          <RoutesHeader
            count={
              data.items?.length < 5 ? data.items.length : data.total_count
            }
          />
          <Routes data={data.items} />
          <RoutesPagination total_count={data.total_count} />
        </>
      );
  function withCoaches() {
    const RouteWithCoach = WithCoach(Route);
    return (
      <>
        <RouteWithCoach route={state.routes.dep} name="from" />
        {state.routes.arr.departure !== null && (
          <RouteWithCoach route={state.routes.arr} name="to" />
        )}
      </>
    );
  }
  // console.log(data, isLoading, isFetching, isError);

  return (
    <section className="routes_page">
      <div className="routes_page__container">
        <aside className="routes_page__aside">
          <AsideBar />
          <LastRoutes />
        </aside>
        <main className="routes_page__main">
          {state.routes.active && allRoutes}
          {state.coaches.active && withCoaches()}
        </main>
      </div>
    </section>
  );
}
