import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            <div className="header__container container">
                <div className="header__row">
                    <p className="header__logo">
                        Plan Your <span className="logo__color"> Meal</span>
                    </p>
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
                    <Link
                        to="/app"
                        className="header__link header__link--active"
                    >
                        Plan your meals
                    </Link>
                    <ScrollLink to="about" className="header__link">
                        Why worth it?
                    </ScrollLink>
                    <ScrollLink to="about_me" className="header__link">
                        About me
                    </ScrollLink>
                    <ScrollLink to="footer" className="header__link">
                        Contact
                    </ScrollLink>
                </nav>
            </div>
        </div>
    );
}

export default Header;
