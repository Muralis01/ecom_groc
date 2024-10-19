import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__logo">
                    <h1>My Basket</h1>
                </div>

                <div className="header__actions">
                    <Link to={'/Cart'} className="header__cart">
                        <div className="header__cartIcon">
                            <FontAwesomeIcon icon={faShoppingCart} aria-label="Cart" />
                        </div>
                        <span className="header__cartText">Cart</span>
                    </Link>
                    <Link to={'/Login'} className="header__login">
                        <div className="header__loginIcon">
                            <FontAwesomeIcon icon={faUser} aria-label="Login" />
                        </div>
                        <span className="header__loginText">Login</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;