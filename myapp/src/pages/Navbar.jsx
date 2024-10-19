import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
                <div className="text-xl font-bold">
                    <h1>My Basket</h1>
                </div>

                <div className="flex items-center gap-6">
                    <Link to="/Cart" className="flex flex-col items-center text-sm">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-xl mb-1" aria-label="Cart" />
                        <span>Cart</span>
                    </Link>
                    <Link to="/Login" className="flex flex-col items-center text-sm">
                        <FontAwesomeIcon icon={faUser} className="text-xl mb-1" aria-label="Login" />
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
