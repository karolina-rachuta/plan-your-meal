import React from 'react';
import { Link } from 'react-router-dom';

function AppHeader() {
    return (
        <div className="header">
            <div className="header__container container">
                <div className="header__row">
                    <Link to="/" className="header__logo">
                        Plan Your <span className="logo__color"> Meal</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
