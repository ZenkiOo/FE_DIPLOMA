import PropTypes from 'prop-types';
import CoachSeats from '../CoachSeats.jsx/CoachSeats';
import Route from './Route';

export default function Routes({ data }) {
  const routes = data.map((route) => (
    <Route route={route} key={route.departure._id} name="default"/>
  ));
  return (
    <>
      <CoachSeats />
      <ul className="routes">{routes}</ul>
    </>
  );
}

Routes.propTypes = {
  data: PropTypes.array,
};
