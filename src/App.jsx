import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLastRoutes } from './store/asyncActions/getLastRoutes';
import { useGetLastRoutesQuery } from './store/api';
import HomePage from './pages/HomePage';
import RoutesPage from './pages/RoutesPage';
import PassengersPage from './pages/PassengersPage';
import PaymentPage from './pages/PaymentPage';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
