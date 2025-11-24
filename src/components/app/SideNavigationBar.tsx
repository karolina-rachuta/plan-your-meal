import React from 'react';

function SideNavigationBar({ handleScreenChange, screenNumber }) {
    return (
        <div className="sidebar__container">
            <p
                className={
                    screenNumber === 1
                        ? 'sidebar__navlink active'
                        : 'sidebar__navlink'
                }
                onClick={() => handleScreenChange(1)}
            >
                Main Desktop
            </p>
            <p
                className={
                    screenNumber === 2
                        ? 'sidebar__navlink active'
                        : 'sidebar__navlink'
                }
                onClick={() => handleScreenChange(2)}
            >
                Recipes
            </p>
            <p
                className={
                    screenNumber === 3
                        ? 'sidebar__navlink active'
                        : 'sidebar__navlink'
                }
                onClick={() => handleScreenChange(3)}
            >
                Meal Plans
            </p>
        </div>
    );
}

export default SideNavigationBar;
