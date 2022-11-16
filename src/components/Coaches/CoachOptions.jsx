import { ReactComponent as AirSvg } from '../../images/icons/svg/coaches_options/air.svg';
import { ReactComponent as WifiSvg } from '../../images/icons/svg/coaches_options/wifi.svg';
import { ReactComponent as LinensSvg } from '../../images/icons/svg/coaches_options/linens.svg';

export default function CoachOptions() {
  const options = [
    {
      id: 0,
      param: 'have_air_conditioning',
      active: false,
      included: true,
      icon: <AirSvg />,
    },
    {
      id: 1,
      param: 'have_wifi',
      active: false,
      included: false,
      icon: <WifiSvg />,
    },
    {
      id: 2,
      param: 'is_linens_included',
      active: false,
      included: false,
      icon: <LinensSvg />,
    },
  ];
  const optionsList = options.map((option) => {
    return (
      <button
        key={option.id}
        className={`coach_options__btn coach_options__btn--default`}
      >
        {option.icon}
      </button>
    );
  });
  return <div className="coach_options">{optionsList}</div>;
}
