import { nanoid } from 'nanoid';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function NavList() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (anchore) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(anchore, { smooth: true });
      }, 300);
    } else {
      scroller.scrollTo(anchore, { smooth: true });
    }
  };
  const links = [
    {
      text: 'О нас',
      to: 'about',
    },
    {
      text: 'Как это работает',
      to: 'howItWorks',
    },
    {
      text: 'Отзывы',
      to: 'reviews',
    },
    {
      text: 'Контакты',
      to: 'contacts',
    },
  ];
  const listItems = links.map((item) => {
    return (
      <li className="nav_list__item" key={nanoid()}>
        <button
          type="button"
          className="nav_list__item_link"
          onClick={() => handleNavClick(item.to)}
        >
          {item.text}
        </button>
      </li>
    );
  });
  return (
    <>
      <div className="logo_container">
        <div className="logo">
          <button
            type="button"
            className="logo__link"
            onClick={() => navigate('/')}
          >
            Лого
          </button>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav_list">{listItems}</ul>
      </nav>
    </>
  );
}
