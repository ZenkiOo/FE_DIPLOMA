import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetRouteQuery } from '../store/api';
import AsideBar from '../components/AsideBar/AsideBar';
import LastRoutes from '../components/LastRoutes/LastRoutes';

export default function RoutePage() {
  const nav = useNavigate();
  const { id } = useParams();
  const { data = {}, isLoading, isFetching, isError } = useGetRouteQuery(id);
  console.log(data, isLoading, isFetching, isError);
  
  const initialState = {
    id: null,
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    have_express: false,
  };

  return (
    <>
      <section className="routes_page">
        <div className="routes_page__container">
          <aside className="routes_page__aside">
            <AsideBar />
            <LastRoutes />
          </aside>
          <main className="routes_page__main">
            {isLoading
              ? 'Loading'
              : data && (
                  <>
                    <button onClick={() => nav('/')}>x</button>
                    <div>RoutePage</div>
                  </>
                )}
          </main>
        </div>
      </section>
    </>
  );
}
