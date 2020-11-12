import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {AuthContext} from "../../../context/admin/AuthContext";
import logo from './images/logo.svg';


export const NavbarClient = () => {
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
                    <li><Link to="#about" className="link_navbar">О нас</Link></li>
                    <li><Link to="#course" className="link_navbar">Курсы</Link></li>
                </ul>
            </div>
        </nav>

    )
};
