import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyGetSubscribeQuery } from '../../store/api';
import { changeSubscribeInput } from '../../store/slices/subscribe';

export default function FooterForm() {
  const [label, setLabel] = useState('Будьте в курсе событий');
  const [getSubscribe] = useLazyGetSubscribeQuery();
  const dispatch = useDispatch();
  const footerFormValue = useSelector((state) => state.subscribe.email);

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(changeSubscribeInput({ value }));
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await getSubscribe(e.target[0].value, {
        preferCacheValue: true,
      }).unwrap();
      setLabel('Вы подписались');
      setTimeout(() => {
        setLabel('Будьте в курсе событий');
      }, 3000);
    } catch (err) {
      console.log(err);
      setLabel('Ошибка. Попробуйте позднее');
      setTimeout(() => {
        setLabel('Будьте в курсе событий');
      }, 3000);
    }
    dispatch(changeSubscribeInput({ value: '' }));
  };
  // fetch(
  //   'https://netology-trainbooking.netoservices.ru/subscribe?email=hello@kitty.com'
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log('f', data))
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <>
      <h5 className="footer_form_title">{label}</h5>
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
