import { ReactComponent as PhoneSvg } from '../../images/icons/svg/phone.svg';
import { ReactComponent as MailSvg } from '../../images/icons/svg/mail.svg';
import { ReactComponent as SkypeSvg } from '../../images/icons/svg/skype.svg';
import { ReactComponent as LocaSvg } from '../../images/icons/svg/loca.svg';

export default function FooterContacts() {
  return (
    <>
      <a href="#" className="footer__block_item">
        <span className="footer__block_item_icon">
          <PhoneSvg />
        </span>
        <span className="footer__block_item_text">8 (800) 000 00 00</span>
      </a>
      <a href="#" className="footer__block_item">
        <span className="footer__block_item_icon">
          <MailSvg />
        </span>
        <span className="footer__block_item_text">inbox@mail.ru</span>
      </a>
      <a href="#" className="footer__block_item">
        <span className="footer__block_item_icon">
          <SkypeSvg />
        </span>
        <span className="footer__block_item_text">tu.train.tickets</span>
      </a>
      <a href="#" className="footer__block_item">
        <span className="footer__block_item_icon">
          <LocaSvg />
        </span>
        <span className="footer__block_item_text">
          г. Москва ул. Московская 27-35 555 555
        </span>
      </a>
    </>
  );
}
