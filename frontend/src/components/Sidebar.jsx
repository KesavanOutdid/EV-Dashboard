import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import './style.css'; // Assume this is your main CSS file
const Sidebar = () => {
    const location = useLocation();
    const email = location.state?.email ?? '';

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className={location.pathname === '/dashboard' ? 'nav-item active' : 'nav-item'}>
                    {/* <a className="nav-link" href="/dashboard" state={{ email }}>
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </a> */}
                    <Link className="nav-link" to={{ pathname: "/dashboard", state: { email } }}>
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className={location.pathname === '/HardwareManagement' || location.pathname === '/PricingManagement' || location.pathname === '/OccupantManagement' ? 'nav-item active' : 'nav-item'} key="accountManagement">
                    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="icon-head menu-icon mdi mdi-account"></i>
                        <span className="menu-title" style={{ paddingRight: '5px' }}>Account Management</span>
                        <i className="menu-arrow" style={{ paddingRight: '5px' }}></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/HardwareManagement"> Hardware <br/> Management </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/PricingManagement"> Pricing <br/> Management </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/OccupantManagement"> Occupant <br/> Management </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={location.pathname === '/AccessManagement' ? 'nav-item active' : 'nav-item'} key="AccessManagement">
                    <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                    <i className="icon-head menu-icon mdi mdi-account-check"></i>
                    <span className="menu-title"> Access Control</span>
                        <i className="menu-arrow" ></i>
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> 
                                <Link className="nav-link" to="/AccessManagement"> Access <br/> Management </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
