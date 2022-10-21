import { nanoid } from 'nanoid';
import { ReactComponent as YouTubeSvg } from '../../images/icons/svg/youtube.svg';
import { ReactComponent as LinkedSvg } from '../../images/icons/svg/linked.svg';
import { ReactComponent as GoogleSvg } from '../../images/icons/svg/google.svg';
import { ReactComponent as FacebookSvg } from '../../images/icons/svg/facebook.svg';
import { ReactComponent as BirdSvg } from '../../images/icons/svg/bird.svg';
export default function FooterSocials() {
  const socialItems = [
    {
      id: 0,
      icon: <YouTubeSvg />,
      link: '#',
    },
    {
      id: 1,
      icon: <LinkedSvg />,
      link: '#',
    },
    {
      id: 2,
      icon: <GoogleSvg />,
      link: '#',
    },
    {
      id: 3,
      icon: <FacebookSvg />,
      link: '#',
    },
    {
      id: 4,
      icon: <BirdSvg />,
      link: '#',
    },
  ];

  const socials = socialItems.map((item) => {
    return (
      <>
        <li className="footer_socials__item" key={nanoid()}>
          <a href={item.link} className="footer_socials__item_link">
            {item.icon}
          </a>
        </li>
      </>
    );
  });
  return <ul className="footer_socials">{socials}</ul>;
}
