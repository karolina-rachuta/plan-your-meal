import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            <div className="header__container container">
                <div className="header__row">
                    <span className="header__logo">Plan Your Meal</span>
                    <div
                        className="header__hamburger"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <nav
                    className={open ? 'header__navbar open' : 'header__navbar'}
                >
                    <Link to="/app">Plan your meals</Link>
                    <ScrollLink to="about">Why worth it?</ScrollLink>
                    <ScrollLink to="about_me">About me</ScrollLink>
                    <ScrollLink to="footer">Contact</ScrollLink>
                </nav>
            </div>
        </div>
    );
}

export default Header;
