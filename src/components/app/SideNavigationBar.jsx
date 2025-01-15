import React from 'react';

function SideNavigationBar({ handleScreenChange }) {
    return (
        <div className="sidebar__container">
            <p
                className="sidebar__navlink"
                onClick={() => handleScreenChange(1)}
            >
                Main Desktop
            </p>
            <p
                className="sidebar__navlink"
                onClick={() => handleScreenChange(2)}
            >
                Recipes
            </p>
            <p
                className="sidebar__navlink"
                onClick={() => handleScreenChange(3)}
            >
                Meal Plans
            </p>
        </div>
    );
}

export default SideNavigationBar;
