import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, Logout } = useFirebase();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>

                <span style={{ color: "white" }}>{user.displayName} </span>

                {user.email ? <button onClick={Logout} >Log out</button>
                    : <NavLink to="/login">LogIn</NavLink>}

                <NavLink to="/register">Register</NavLink>
            </nav>
        </div>
    );
};

export default Header;