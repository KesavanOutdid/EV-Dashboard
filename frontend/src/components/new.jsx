import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, useLocation } from 'react-router-dom';

const Header = ({ handleLogout, email  }) => {
  const location = useLocation();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    // <!-- Navbar -->
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
       <Link className="navbar-brand brand-logo mr-5" href="index.html"><img src="images/dashboard/EV_Power_16-12-2023.png" className="mr-2" alt="logo"/></Link>
       <Link className="navbar-brand brand-logo-mini" href="index.html"><img src="images/dashboard/EV_Logo_16-12-2023.png" alt="logo"/></Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown">
            <Link className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i className="icon-ellipsis"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <button className="dropdown-item" onClick={handleLogout}>
               <i className="ti-power-off text-primary"></i>
               Logout
             </button>
            </div>
          </li>
        </ul>
        {/* <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button> */}
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleSidebar} data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button>
      </div>
      {/* Sidebar mobile view */}
      <nav className={`sidebar sidebar-offcanvas ${sidebarVisible ? 'active' : ''}`} id="sidebar">
          <ul className="nav">
            <li className={location.pathname === '/dashboard' ? 'nav-item active' : 'nav-item'}>
              <NavLink className="nav-link" to={{ pathname: "/dashboard", state: { email } }}>
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </NavLink>
            </li>
            <li className={location.pathname === '/HardwareManagement' || location.pathname === '/PageRefreshOnce' ? 'nav-item active' : 'nav-item'}>
              <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i className="icon-head menu-icon"></i>
                <span className="menu-title" style={{ paddingRight: '3px' }}>Account Management</span>
                <i className="menu-arrow" style={{ paddingRight: '5px' }}></i>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/HardwareManagement"> Hardware <br />Management </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/PageRefreshOnce"> PageRefreshOnce </NavLink>
                  </li> 
                </ul>
              </div>
            </li>
          </ul>
        </nav>
       {/* Sidebar mobile view */}
   </nav>
   
  );
};

export default Header
