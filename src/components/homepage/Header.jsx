import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            <div className="header__container container">
                <div className="header__row">
                    <Link to="/" className="header__logo">
                        Plan Your <span className="logo__color"> Meal</span>
                    </Link>
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
                </nav>
            </div>
        </div>
    );
}

export default Header;
