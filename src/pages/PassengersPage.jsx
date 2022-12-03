import '../components/Passengers/css/passengers.scss';
import AsideBar from '../components/AsideBar/AsideBar';
import Passengers from '../components/Passengers/Passengers';

export default function PassengersPage() {
  return (
    <>
      <section className="routes_page">
        <div className="routes_page__container">
          <aside className="routes_page__aside">
            <AsideBar />
          </aside>
          <main className="routes_page__main">
            <Passengers />
          </main>
        </div>
      </section>
    </>
  );
}
