import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Basketball Sock Store" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="user-options">
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
                <a href="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">3</span>
                </a>
            </div>
        </header>
    );
}

export default Header;
