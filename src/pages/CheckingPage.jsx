import '../components/Checking/css/checking.scss';
import AsideBar from '../components/AsideBar/AsideBar';
import Checking from '../components/Checking/Checking';

export default function CheckingPage() {
  return (
    <section className="routes_page checking_page">
      <div className="routes_page__container">
        <aside className="routes_page__aside">
          <AsideBar />
        </aside>
        <main className="routes_page__main">
          <Checking />
        </main>
      </div>
    </section>
  );
}
