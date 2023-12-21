import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './page/Login';
import Dashboard from './page/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user'); // Use sessionStorage here
    if (storedUser) {
      setLoggedIn(true);
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (data) => {
    const { email, ...rest } = data;
    setUserInfo({ email, ...rest });
    setLoggedIn(true);
    sessionStorage.setItem('user', JSON.stringify({ email, ...rest })); // Use sessionStorage here
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserInfo({});
    sessionStorage.removeItem('user'); // Use sessionStorage here
  };

  return (
    <Router>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/dashboard" /> : <Login handleLogin={handleLogin} />}
      </Route>
      <Route path="/dashboard">
        {loggedIn ? (
          <Dashboard userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
    </Router>
  );
};

export default App;
