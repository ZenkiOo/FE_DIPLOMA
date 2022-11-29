import { useSelector } from 'react-redux';
import RouteTimeInfo from '../Routes/RouteTimeInfo';
import PassengersInfo from './PassengersInfo';

export default function DirectionInfo(props) {
  const { seats } = useSelector((state) => state.passengers[props.route]);
  const { params } = useSelector((state) => state.routesParams.routes);
  const route = useSelector(
    (state) => state.routesParams.routes[props.route].departure
  );

  const reversed = props.route === 'departure' ? false : true;
  const selected_date =
    props.route === 'departure'
      ? { date_start: params.date_start }
      : { date_end: params.date_end };

  // console.log(seats);

  return (
    <div className="rly_info">
      <div className="rly_info__names">
        <div className="rly_info__names_item">
          <span className="rly_info__names_item_label">№ Поезда</span>
          <span className="rly_info__names_item_value">
            {route._id.slice(-4)}
          </span>
        </div>
        <div className="rly_info__names_item">
          <span className="rly_info__names_item_label">Название</span>
          <span className="rly_info__names_item_value rly_info__names_item_value--name">
            {route.train.name}
          </span>
        </div>
      </div>
      <div className="rly_info__times">
        <RouteTimeInfo {...{ route, reversed, selected_date }} />
      </div>
      <div>
        <PassengersInfo seats={seats} route={props.route} />
      </div>
    </div>
  );
}
