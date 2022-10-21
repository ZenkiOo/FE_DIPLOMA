import './css/footer.css';
import FooterContacts from './FooterContacts';
import FooterForm from './FooterForm';
import FooterSocials from './FooterSocials';
import FooterSubRow from './FooterSubRow';

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer">
        <div className="footer__body">
          <div className="footer__block">
            <h4 className="footer__block_title">Свяжитесь с нами</h4>
            <FooterContacts />
          </div>
          <div className="footer__block">
            <h4 className="footer__block_title">Подписка</h4>
            <FooterForm />
            <h4 className="footer__block_title footer__block_title--socials">
              Подписывайтесь на нас
            </h4>
            <FooterSocials />
          </div>
        </div>
        <div className="footer__subrow">
          <FooterSubRow />
        </div>
      </div>
    </footer>
  );
}
