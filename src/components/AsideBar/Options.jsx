import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setRoutesParam,
  setCoachesParams,
  setCoachParam,
  setGlobalCoachesParams,
} from '../../store/slices/routesParams';
import { ReactComponent as SecondClassSvg } from '../../images/icons/svg/routes_options/have_second_class.svg';
import { ReactComponent as ThirdClassSvg } from '../../images/icons/svg/routes_options/have_third_class.svg';
import { ReactComponent as FourthClassSvg } from '../../images/icons/svg/routes_options/have_fourth_class.svg';
import { ReactComponent as FirstClassSvg } from '../../images/icons/svg/routes_options/have_first_class.svg';
import { ReactComponent as WifiSvg } from '../../images/icons/svg/routes_options/have_wifi.svg';
import { ReactComponent as ExpressSvg } from '../../images/icons/svg/routes_options/have_express.svg';

export default function Options({ active }) {
  useEffect(() => {
    if (active !== 'all_coaches') return;
    dispatch(setGlobalCoachesParams());
  }, [active]);

  const state = useSelector((state) => state.routesParams);
  const dispatch = useDispatch();

  function localParams() {
    switch (active) {
      case 'routes':
        return state.routes.params;
      case 'all_coaches':
        return state.routes.params;
      case 'departure':
        return state.coaches.departure;
      case 'arrival':
        return state.coaches.arrival;

      default:
        break;
    }
  }

  function createOptionsList() {
    const params = localParams();
    const options = {
      have_second_class: {
        id: 0,
        name: 'Купе',
        icon: <SecondClassSvg />,
        checked: params.have_second_class ? true : false,
      },
      have_third_class: {
        id: 1,
        name: 'Плацкарт',
        icon: <ThirdClassSvg />,
        checked: params.have_third_class ? true : false,
      },
      have_fourth_class: {
        id: 2,
        name: 'Сидячий',
        icon: <FourthClassSvg />,
        checked: params.have_fourth_class ? true : false,
      },
      have_first_class: {
        id: 3,
        name: 'Люкс',
        icon: <FirstClassSvg />,
        checked: params.have_first_class ? true : false,
      },
      have_wifi: {
        id: 4,
        name: 'Wi-Fi',
        icon: <WifiSvg />,
        checked: params.have_wifi ? true : false,
      },
      have_express: {
        id: 5,
        name: 'Экспресс',
        icon: <ExpressSvg />,
        checked: params.have_express ? true : false,
      },
    };
    return options;
  }

  const handleCheckboxChange = (e) => {
    switch (active) {
      case 'routes':
        dispatch(
          setRoutesParam({
            param: e.target.name,
            value: e.target.checked === true ? true : null,
          })
        );
        break;
      case 'all_coaches':
        dispatch(
          setCoachesParams({
            param: e.target.name,
            value: e.target.checked === true ? true : null,
          })
        );
        break;
      case 'departure':
        dispatch(
          setCoachParam({
            name: active,
            param: e.target.name,
            value: e.target.checked === true ? true : null,
          })
        );
        break;
      case 'arrival':
        dispatch(
          setCoachParam({
            name: active,
            param: e.target.name,
            value: e.target.checked === true ? true : null,
          })
        );
        break;

      default:
        break;
    }
  };
  const options = createOptionsList();
  const optionsList = Object.entries(options).map((option) => {
    const name = option[0],
      obj = option[1];
    return (
      <li className="routes_details__option" key={obj.id}>
        <label className="routes_details__option_label">
          <div
            className={`routes_details__option_icon routes_details__option_icon--${name}`}
          >
            {obj.icon}
          </div>
          <div className="routes_details__option_name">
            <span className="routes_details__option_name_text">{obj.name}</span>
          </div>
          <div className="routes_details__option_checkbox">
            <input
              type="checkbox"
              name={name}
              id={`routes_checkbox_${name}`}
              onChange={handleCheckboxChange}
              checked={obj.checked}
            />
            <span className="routes_details__option_checkbox_fake_body"></span>
          </div>
        </label>
      </li>
    );
  });
  return <ul className="routes_details__options_list">{optionsList}</ul>;
}
