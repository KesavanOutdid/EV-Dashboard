import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const email = location.state?.email || '';
    return (
        //  Main Sidebar Container 
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item active">
                    <Link className="nav-link" to={{ pathname: "/dashboard", state: { email } }}>
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="icon-head menu-icon"></i>
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link className="nav-link" to="/"> Login </Link></li>
                            <li className="nav-item"> <Link className="nav-link" to="/Register"> Register </Link></li>
                        </ul>
                    </div>
                </li> */}
            </ul>
        </nav>
    );
};

export default Sidebar
