import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import authReducer from './services/auth/reducer';
import { setJWT } from './services/auth/actions';
import checkinReducer from './services/checkin/reducer';
import eventsReducer from './services/events/reducer';
import registrationReducer from './services/registration/reducer';
import rsvpReducer from './services/rsvp/reducer';
import sessionReducer from './services/ui/reducer';
import userReducer from './services/user/reducer';

import './reset.css';

const rootReducer = combineReducers({
  auth: authReducer,
  checkin: checkinReducer,
  events: eventsReducer,
  registration: registrationReducer,
  rsvp: rsvpReducer,
  session: sessionReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

if (process.env.NODE_ENV === "development") {
  store.dispatch(setJWT(process.env.REACT_APP_TOKEN));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
