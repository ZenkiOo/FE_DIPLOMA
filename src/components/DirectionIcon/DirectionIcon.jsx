import './css/direction_icon.scss'
import { ReactComponent as ArrowSvg } from '../../images/icons/svg/arrow_big.svg';


export default function DirectionIcon({direction}) {
  return (
    <div className={`dir_icon dir_icon--${direction}`}>
      <ArrowSvg />
    </div>
  );
}
