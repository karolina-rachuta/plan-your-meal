import React from 'react';

type Props = {
    onScreenChange: (value: number) => void;
    screenNumber: number;
};
function SideNavigationBar({ onScreenChange, screenNumber }: Props) {
    return (
        <div className="sidebar__container">
            <p
                className={
                    screenNumber === 1
                        ? 'sidebar__navlink active'
                        : 'sidebar__navlink'
                }
                onClick={() => onScreenChange(1)}
            >
                Main Desktop
            </p>
            <p
                className={
                    screenNumber === 2
                        ? 'sidebar__navlink active'
                        : 'sidebar__navlink'
                }
                onClick={() => onScreenChange(2)}
            >
                Recipes
            </p>
            <p
                className={
                    screenNumber === 3
                        ? 'sidebar__navlink active'
                        : 'sidebar__navlink'
                }
                onClick={() => onScreenChange(3)}
            >
                Meal Plans
            </p>
        </div>
    );
}

export default SideNavigationBar;
