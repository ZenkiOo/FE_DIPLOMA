import { ReactComponent as TimerSvg } from '../../images/icons/svg/timer.svg';

export default function Time() {
  return (
    <div className="duration">
      <div className="duration__icon">
        <TimerSvg />
      </div>
      <div className="duration__time">
        <p className="duration__time_row">9 часов</p>
        <p className="duration__time_row">42 минуты</p>
      </div>
    </div>
  );
}
