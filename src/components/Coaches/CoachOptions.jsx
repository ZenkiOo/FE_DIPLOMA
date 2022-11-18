import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCoachOption,
  setCoachOptionsDefault,
} from '../../store/slices/passengers';

import { ReactComponent as AirSvg } from '../../images/icons/svg/coaches_options/air.svg';
import { ReactComponent as WifiSvg } from '../../images/icons/svg/coaches_options/wifi.svg';
import { ReactComponent as LinensSvg } from '../../images/icons/svg/coaches_options/linens.svg';

export default function CoachOptions({ coach, direction }) {
  const coachOptions = useSelector(
    (state) => state.passengers[direction].coachOptions
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCoachOptionsDefault({ route: direction }));
  }, [coach]);

  function onCoachOptionChange(e) {
    dispatch(
      setCoachOption({
        route: direction,
        name: e.target.name,
        value: e.target.checked,
      })
    );
  }
  const {
    have_air_conditioning,
    have_wifi,
    wifi_price,
    is_linens_included,
    linens_price,
    class_type,
  } = coach;

  const options = [
    {
      id: 0,
      name: 'air_conditioning',
      in_stock: class_type !== 'first' ? have_air_conditioning : true,
      checked: coachOptions.air_conditioning,
      included: true,
      icon: <AirSvg />,
    },
    {
      id: 1,
      name: 'wifi',
      in_stock: have_wifi,
      checked: coachOptions.wifi,
      included: false,
      icon: <WifiSvg />,
    },
    {
      id: 2,
      name: 'linens',
      in_stock: class_type !== 'fourth' && true,
      checked: coachOptions.linens,
      included: is_linens_included,
      icon: <LinensSvg />,
    },
  ];
  const optionsList = options.map((option) => {
    return (
      <label
        key={option.id}
        className={[
          'coach_options__btn',
          `${(option.in_stock && option.included) ? 'coach_options__btn--in_stock' : ''}`,
          // `${(option.in_stock && option.included) && 'coach_options__btn--included'}`,
        ]
          .join(' ')
          .trim()}
      >
        <input
          type="checkbox"
          className={`checkbox_${option.name}`}
          name={option.name}
          checked={option.checked}
          onChange={onCoachOptionChange}
          disabled={!option.in_stock || option.name === 'air_conditioning'}
        />
        <div className="coach_options__btn_body">{option.icon}</div>
      </label>
    );
  });
  return <div className="coach_options">{optionsList}</div>;
}
