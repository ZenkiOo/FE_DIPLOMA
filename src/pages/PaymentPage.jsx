import '../components/Payment/css/payment.scss';
import AsideBar from '../components/AsideBar/AsideBar';
import PaymentForm from '../components/Payment/PaymentForm';

export default function PaymentPage() {
  return (
    <section className="routes_page payment_page">
      <div className="routes_page__container">
        <aside className="routes_page__aside">
          <AsideBar />
        </aside>
        <main className="routes_page__main">
          <PaymentForm />
        </main>
      </div>
    </section>
  );
}
