import '../components/Routes/css/routes.css';
import RoutesDetails from '../components/Routes/RoutesDetails';
import Routes from '../components/Routes/Routes';

import { useSelector } from 'react-redux';
import { useGetRoutesQuery } from '../store/api';
const queryString = require('query-string');

export default function RoutesPage() {
  const params = useSelector((state) => state.routesParams);
  const {
    data = {},
    isLoading,
    isFetching,
    isError,
  } = useGetRoutesQuery(queryString.stringify(params, { skipNull: true }));
  console.log(data, isLoading, isFetching, isError);

  return (
    <section className="routes_page">
      <div className="routes_page__container">
        <div className="routes_page__aside">{<RoutesDetails />}</div>
        <div className="routes_page__main">
          {data.items && <Routes data={data.items} />}
        </div>
      </div>
    </section>
  );
}
