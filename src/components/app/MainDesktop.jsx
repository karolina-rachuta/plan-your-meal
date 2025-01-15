import React from 'react';

function MainDesktop() {
    return (
        <div className="maindesktop__container">
            <div className="maindesktop__top">
                <div className="maindesktop__widget">
                    <div className="widget__box">add recipe</div>
                    <div className="widget__box">add plan</div>
                </div>
                <div className="maindesktop__widget maindesktop__widget--col">
                    <p className="widget__box widget__box--right">
                        You have 99 recipes
                    </p>
                    <p className="widget__box widget__box--right">
                        Remember to add a plan!
                    </p>
                    <p className="widget__box widget__box--right">
                        So glad you're here! Happy planning and bon appétit!
                    </p>
                </div>
            </div>
            <div className="maindesktop__bottom">plan</div>
        </div>
    );
}

export default MainDesktop;
