import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import routesSearchReducer from '../reducers/routesSearch';
import subscribeReduser from '../reducers/subscribe';

const reducer = combineReducers({
  searchForm: routesSearchReducer,
  footerForm: subscribeReduser
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
