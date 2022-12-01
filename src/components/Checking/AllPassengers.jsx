import { nanoid } from 'nanoid';
import TotalSum from '../AsideBar/TotalSum';
import { ReactComponent as PersonSvg } from '../../images/icons/svg/person.svg';

export default function AllPassengers({ passengers }) {
  const allPassengers = passengers.map((passenger) => (
    <div className="check_pass" key={nanoid()}>
      <div className="check_pass__icon">
        <span className="check_pass__icon_svg">
          <PersonSvg />
        </span>
        <span className="check_pass__icon_age">
          {passenger.is_child ? 'Детский' : 'Взрослый'}
        </span>
      </div>
      <div className="check_pass__body">
        <span className="check_pass__name">
          {passenger.person_info.last_name +
            ' ' +
            passenger.person_info.first_name +
            ' ' +
            passenger.person_info.patronymic}
        </span>
        <span className="check_pass__gender">
          Пол {+passenger.person_info.gender === 0 ? 'Мужской' : 'Женский'}
        </span>
        <span className="check_pass__birthday">
          Дата рождения{' '}
          {passenger.person_info.birthday.toLocaleString().slice(0, 10)}
        </span>
        <span className="check_pass__document">
          {passenger.is_child
            ? `Свидетельсто о рождении ${passenger.person_info.document_data}`
            : `Паспорт РФ ${passenger.person_info.document_data}`}
        </span>
      </div>
    </div>
  ));
  return (
    <div className="all_pass">
      <div className="all_pass__passengers">{allPassengers}</div>
      <div className="all_pass__sum">
        <div className="all_pass__sum_curr">
          <span className="all_pass__sum_text">Всего</span>
          <TotalSum name="checking" />
        </div>
        <div className="all_pass__action">
          <button className="all_pass__action_btn">Изменить</button>
        </div>
      </div>
    </div>
  );
}
