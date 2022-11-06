import './css/header.css';
import NavList from './NavList';
import BookingForm from './BookingForm';
import Preloader from './Preloader';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const createHeaderClass = () => {
    if (location.pathname !== '/')
      return 'header header--collapsed';
    return 'header';
  };
  return (
    <header className={createHeaderClass()}>
      <NavList />
      <BookingForm />
      <Preloader />
    </header>
  );
}
