import { ReactComponent as FirstClassSvg } from '../../images/icons/svg/routes_options/have_first_class.svg';
import { ReactComponent as SecondClassSvg } from '../../images/icons/svg/routes_options/have_second_class.svg';
import { ReactComponent as ThirdClassSvg } from '../../images/icons/svg/routes_options/have_third_class.svg';
import { ReactComponent as FourthClassSvg } from '../../images/icons/svg/routes_options/have_fourth_class.svg';

export default function CoachesType({ activeType, active }) {
  const typeItems = [
    {
      id: 3,
      type: 'fourth',
      icon: <FourthClassSvg />,
      text: 'Сидячий',
    },
    {
      id: 2,
      type: 'third',
      icon: <ThirdClassSvg />,
      text: 'Плацкарт',
    },

    {
      id: 1,
      type: 'second',
      icon: <SecondClassSvg />,
      text: 'Купе',
    },
    {
      id: 0,
      type: 'first',
      icon: <FirstClassSvg />,
      text: 'Люкс',
    },
  ];
  const typeItemsList = typeItems.map((item) => (
    <li
      className={`coach_type__item coach_type__item--${item.type}`}
      key={item.id}
    >
      <div
        className={`coach_type__item_icon ${
          item.type === activeType && active
            ? 'coach_type__item_icon--active'
            : ''
        }`}
      >
        {item.icon}
      </div>
      <p className="coach_type__item_text">{item.text}</p>
    </li>
  ));
  return <ul className="coach_type">{typeItemsList}</ul>;
}
