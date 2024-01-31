import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import HardwareManagement from './page/HardwareManagement';
import PricingManagement from './page/PricingManagement';
import OccupantManagement from './page/OccupantManagement';
import AccessManagement from './page/AccessManagement';

const App = () => {
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const [loggedIn, setLoggedIn] = useState(!!storedUser);
  const [userInfo, setUserInfo] = useState(storedUser || {});
  const [initialLoad, setInitialLoad] = useState(true);

  const handleLogin = (data) => {
    const { email, ...rest } = data;
    setUserInfo({ email, ...rest });
    setLoggedIn(true);
    sessionStorage.setItem('user', JSON.stringify({ email, ...rest }));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserInfo({});
    sessionStorage.removeItem('user');
  };

  return (
    <Router>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/dashboard" /> : <Login handleLogin={handleLogin} />}
      </Route>
      <Route path="/dashboard">
        {loggedIn ? (
          initialLoad ? (
            <Dashboard
              userInfo={userInfo}
              handleLogout={handleLogout}
              setInitialLoad={setInitialLoad}
            />
          ) : (
            <Dashboard userInfo={userInfo} handleLogout={handleLogout} />
          )
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/HardwareManagement">
        {loggedIn ? (
          <HardwareManagement userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/PricingManagement">
        {loggedIn ? (
          <PricingManagement userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/OccupantManagement">
        {loggedIn ? (
          <OccupantManagement userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/AccessManagement">
        {loggedIn ? (
          <AccessManagement userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
    </Router>
  );
};

export default App;
