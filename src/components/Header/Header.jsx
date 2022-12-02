import './css/header.css';
import NavList from './NavList';
import BookingForm from './BookingForm';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const createHeaderClass = () => {
    if (location.pathname === '/order') return 'header header--order';
    if (location.pathname !== '/') return 'header header--collapsed';
    return 'header';
  };
  const headerClass = createHeaderClass();
  return (
    <header className={headerClass}>
      <NavList />
      {location.pathname !== '/order' && <BookingForm />}
    </header>
  );
}
