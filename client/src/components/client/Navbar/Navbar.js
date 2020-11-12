import React, {useContext} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from "../../../context/admin/AuthContext";
import logo from './images/logo.svg';


export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-wrapper white darken-1" style={{padding: ' 0 2rem'}}>
                <NavLink to="/" className="brand-logo orange left link_navbar logo-link_navbar" style={{color: '#000'}}>
                    <img src={logo} alt="" className="logo-navbar"/>
                    WebSharm
                </NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/#about" className="link_navbar">О нас</Link></li>
                    <li><NavLink to="#course" className="link_navbar">Курсы</NavLink></li>
                    <li><NavLink to="#reviews" className="link_navbar">Отзывы</NavLink></li>
                </ul>
            </div>
        </nav>

    )
};
