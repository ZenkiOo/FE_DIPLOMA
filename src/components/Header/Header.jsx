import './css/header.css';
import NavList from './NavList';
import BookingForm from './BookingForm';
import Preloader from './Preloader';

export default function Header() {
  return (
    <header className="header">
      <NavList />
      <BookingForm />
      <Preloader />
    </header>
  );
}
