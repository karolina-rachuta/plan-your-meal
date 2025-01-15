import React from 'react';
import Plus from '../../assets/add_plus.png';
import Exclamation from '../../assets/exclamation_mark_round_sign_icon.png';
import Information from '../../assets/information_line_icon.png';
import Check from '../../assets/check_mark_icon.png';

function MainDesktop({ handleScreenChange }) {
    return (
        <div className="maindesktop__container">
            <div className="maindesktop__top">
                <div className="maindesktop__widget">
                    <button
                        className="widget__box"
                        onClick={() => handleScreenChange(4)}
                    >
                        <img src={Plus} alt="" className="widget__add" />
                        add recipe
                    </button>
                    <button
                        className="widget__box"
                        onClick={() => handleScreenChange(5)}
                    >
                        <img src={Plus} alt="" className="widget__add" /> add
                        plan
                    </button>
                </div>
                <div className="maindesktop__widget maindesktop__widget--col">
                    <p className="widget__box widget__box--right">
                        <img
                            src={Information}
                            alt=""
                            className="widget__add--right"
                        />
                        You have 99 recipes
                    </p>
                    <p className="widget__box widget__box--right">
                        <img
                            src={Exclamation}
                            alt=""
                            className="widget__add--right"
                        />
                        Remember to add a plan!
                    </p>
                    <p className="widget__box widget__box--right">
                        <img
                            src={Check}
                            alt=""
                            className="widget__add--right"
                        />{' '}
                        So glad you're here! Happy planning and bon appétit!
                    </p>
                </div>
            </div>
            <div className="maindesktop__bottom">plan</div>
        </div>
    );
}

export default MainDesktop;
