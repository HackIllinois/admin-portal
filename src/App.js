import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faUsers, faBell, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import PrivateRoute from './components/PrivateRoute';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

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
                <NavLink to={route.path} exact className="navigation-link" activeClassName="active">
                  <FontAwesomeIcon icon={route.icon} fixedWidth/>&nbsp; {route.name}
                </NavLink>
              ))
            }
          </div>
        </div>

        <Switch>
          <Route path="/auth" component={Auth}></Route>
          
          <PrivateRoute exact path="/">
            <Dashboard/>
          </PrivateRoute>
          
          <PrivateRoute path="/users"></PrivateRoute>
          <PrivateRoute path="/notifications"></PrivateRoute>
          <PrivateRoute path="/events"></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
