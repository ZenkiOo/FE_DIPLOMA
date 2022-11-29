import './css/direction_icon.scss'
import { ReactComponent as ArrowSvg } from '../../images/icons/svg/arrow_big.svg';


export default function DirectionIcon({direction}) {
  const classWithDirection = `dir_icon dir_icon--${direction}`
  return (
    <div className={classWithDirection}>
      <ArrowSvg />
    </div>
  );
}
