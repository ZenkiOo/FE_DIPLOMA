import { ReactComponent as RouteArrowSvg } from '../../images/icons/svg/route_arrow.svg';

export default function RouteTimeInfo({ route, reversed }) {
  const timeHandler = (time) => {
    const date = new Date(time);
    // console.log(date);
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const timeParsed = `${hours}:${minutes}`;
    return timeParsed;
  };
  return (
    <div className="route_time">
      <div className="route_time__item route_time__item--from">
        <span className="route_time__time">
          {timeHandler(reversed ? route.to.datetime : route.from.datetime)}
        </span>
        <span className="route_time__city">
          {reversed ? route.to.city.name : route.from.city.name}
        </span>
        <span className="route_time__station">
          {reversed
            ? route.to.railway_station_name
            : route.from.railway_station_name}
        </span>
      </div>

      <div className="route_time__duration">
        <span className="route_time__duration_time">
          {timeHandler(route.duration)}
        </span>
        <RouteArrowSvg className={reversed && 'reversed'} />
      </div>

      <div className="route_time__item">
        <span className="route_time__time">
          {timeHandler(reversed ? route.from.datetime : route.to.datetime)}
        </span>
        <span className="route_time__city">
          {reversed ? route.from.city.name : route.to.city.name}
        </span>
        <span className="route_time__station">
          {reversed
            ? route.from.railway_station_name
            : route.to.railway_station_name}
        </span>
      </div>
    </div>
  );
}
