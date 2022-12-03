import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoutesPage from './pages/RoutesPage';
import PassengersPage from './pages/PassengersPage';
import PaymentPage from './pages/PaymentPage';
import CheckingPage from './pages/CheckingPage';
import OrderPage from './pages/OrderPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './css/reset.css';
import './css/datepicker.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/passengers" element={<PassengersPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checking" element={<CheckingPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
