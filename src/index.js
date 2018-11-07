import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

import checkinReducer from './services/checkin/reducer';
import eventsReducer from './services/events/reducer';
import registrationReducer from './services/registration/reducer';
import rsvpReducer from './services/rsvp/reducer';
import sessionReducer from './services/ui/reducer';

import './reset.css';

const rootReducer = combineReducers({
  checkin: checkinReducer,
  events: eventsReducer,
  registration: registrationReducer,
  rsvp: rsvpReducer,
  session: sessionReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
