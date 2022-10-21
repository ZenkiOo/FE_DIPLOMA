import { useSelector, useDispatch } from 'react-redux';
import { changeSubscribeInput } from '../../actions/actionsCreators';

export default function FooterForm() {
  const dispatch = useDispatch();
  const footerFormValue = useSelector((state) => state.footerForm);

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(changeSubscribeInput(value));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(footerFormValue);
    dispatch(changeSubscribeInput(''));
  };

  return (
    <>
      <h5 className="footer_form_title">Будьте в курсе событий</h5>
      <form className="footer_form" onSubmit={handleSubscribe}>
        <div className="footer_form__item">
          <input
            type="text"
            className="footer_form__input"
            placeholder="e-mail"
            value={footerFormValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="footer_form__item">
          <button type="submit" className="footer_form__btn">
            Отправить
          </button>
        </div>
      </form>
    </>
  );
}
