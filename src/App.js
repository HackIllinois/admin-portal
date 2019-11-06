import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faUsers, faBell, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './app.scss';
import Dashboard from './components/Dashboard';
import Events from './components/Events';

const routes = [
  { path: '/', name: "Dashboard", icon: faColumns },
  { path: '/users', name: "Users", icon: faUsers },
  { path: '/notifications', name: "Notifications", icon: faBell },
  { path: '/events', name: "Events", icon: faCalendar },
]

function App() {
  return (
    <div className="App">
      <BrowserRouter className="router">
        <div className="navigation-menu-container">
          <div className="navigation-menu">
            {
              routes.map(route => (
                <NavLink exact to={route.path} className="navigation-link" activeClassName="active" key={route.name}>
                  <FontAwesomeIcon icon={route.icon} fixedWidth/>&nbsp; {route.name}
                </NavLink>
              ))
            }
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route path="/users"></Route>
          <Route path="/notifications"></Route>
          <Route path="/events">
            <Events/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
