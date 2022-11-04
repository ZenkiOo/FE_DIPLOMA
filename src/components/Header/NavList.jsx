import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';

export default function NavList() {
  const location = useLocation();
  // console.log(location);
  const links = [
    {
      text: 'О нас',
    },
    {
      text: 'Как это работает',
    },
    {
      text: 'Отзывы',
    },
    {
      text: 'Контакты',
    },
  ];
  const listItems = links.map((item) => {
    return (
      <li className="nav_list__item" key={nanoid()}>
        <a className="nav_list__item_link" href="#">
          {item.text}
        </a>
      </li>
    );
  });
  return (
    <>
      <div className="logo_container">
        <div className="logo">
          <a className="logo__link" href="/">
            Лого
          </a>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav_list">{listItems}</ul>
      </nav>
    </>
  );
}
