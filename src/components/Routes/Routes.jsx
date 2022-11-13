import PropTypes from 'prop-types';
import Route from './Route';

export default function Routes({ data }) {
  const routes = data.map((route) => (
    <Route route={route} key={route.departure._id} name="default" />
  ));
  return (
    <>
      <div className="routes">{routes}</div>
    </>
  );
}

Routes.propTypes = {
  data: PropTypes.array,
};
