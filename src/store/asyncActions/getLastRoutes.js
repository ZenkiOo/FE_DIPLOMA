import {
  getLastRoutesRequest,
  getLastRoutesSuccess,
  getLastRoutesFailure,
} from '../slices/lastRoutes';
import { setLoading } from '../slices/loading';

export const getLastRoutes = () => async (dispatch, getState) => {
  dispatch(setLoading(true));

  try {
    const response = await fetch(
      'https://netology-trainbooking.netoservices.ru/routes/last'
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const routes = await response.json();
    dispatch(getLastRoutesSuccess({ routes }));
    dispatch(setLoading(false));
  } catch (error) {
    const { message } = error;
    dispatch(getLastRoutesFailure({ message }));
  }
};
