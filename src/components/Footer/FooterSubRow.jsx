import { ReactComponent as ArrowUpSvg } from '../../images/icons/svg/arrow_up.svg';

export default function FooterSubRow() {
  return (
    <>
      <div className="footer__subrow_item">
        <span className="footer__subrow_item_text footer__subrow_item_text--logo">Лого</span>
      </div>
      <div className="footer__subrow_item">
        <button className="footer__subrow_item_btn">
          <ArrowUpSvg />
        </button>
      </div>
      <div className="footer__subrow_item">
        <span className="footer__subrow_item_text">2022 WEB</span>
      </div>
    </>
  );
}
