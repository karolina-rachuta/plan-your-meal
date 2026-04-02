import React, { useState } from 'react';

import { type WeekSchedule } from '../../context/ScheduleContext';

import Plus from '../../assets/plus.svg';
import Plus_orange from '../../assets/plus_orange.svg';
import Exclamation from '../../assets/exclamation_mark_round_sign_icon.png';
import Information from '../../assets/information_line_icon.png';
import Check from '../../assets/check_mark_icon.png';
import useRecipeContext from '../../context/useRecipeContext';
import useScheduleContext from '../../context/useScheduleContext';

type Props = {
    onScreenChange: (value: number) => void;
};

function MainDesktop({ onScreenChange }: Props) {
    const { recipesList } = useRecipeContext();
    const { scheduleList } = useScheduleContext();

    const [planIndex, setPlanIndex] = useState<number>(0);

    const selectedPlan = scheduleList[planIndex] || undefined;

    const totalRecipes = recipesList.length;

    function handlePrev() {
        setPlanIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

    function handleNext() {
        setPlanIndex((prev) =>
            prev < scheduleList.length - 1 ? prev + 1 : prev
        );
    }
    return (
        <div className="maindesktop__container">
            <div className="maindesktop__top">
                <div className="maindesktop__widget">
                    <button
                        className="widget__box"
                        onClick={() => onScreenChange(4)}
                    >
                        <div className="widget__border">
                            <img
                                src={Plus}
                                alt="Plus"
                                className="widget__add"
                            />
                        </div>
                        Add Recipe
                    </button>
                    <button
                        className="widget__box"
                        onClick={() => onScreenChange(5)}
                    >
                        <div className="widget__border widget__border--right">
                            <img
                                src={Plus_orange}
                                alt="Plus"
                                className="widget__add"
                            />
                        </div>
                        Add Meal Plan
                    </button>
                </div>
                <div className="maindesktop__widget maindesktop__widget--col">
                    <div className="widget__box widget__box--right widget__box--green">
                        <img
                            src={Information}
                            alt="Information"
                            className="widget__add--right"
                        />
                        You have {totalRecipes} recipes
                    </div>
                    <div className="widget__box widget__box--right">
                        <img
                            src={Exclamation}
                            alt="Exclamation"
                            className="widget__add--right"
                        />
                        Remember to add a meal plan!
                    </div>
                    <div className="widget__box widget__box--right widget__box--green">
                        <img
                            src={Check}
                            alt="Check"
                            className="widget__add--right"
                        />{' '}
                        So glad you&apos;re here! Happy planning and bon
                        appétit!
                    </div>
                </div>
            </div>
            <div className="maindesktop__container add__container">
                {selectedPlan && (
                    <>
                        <h4 className="mealPlan__title">
                            Your Meal Plan for : {selectedPlan.number} week
                        </h4>
                        <div className="add__botom">
                            {Object.keys(selectedPlan.mealPlan).map((day) => (
                                <div className="mealplan__table" key={day}>
                                    <h4 className="mealPlan__header">{day}</h4>
                                    {Object.entries(
                                        selectedPlan.mealPlan[
                                            day as keyof WeekSchedule
                                        ]
                                    ).map(([key, value]) => (
                                        <p
                                            className="mealPlan__row"
                                            key={`${day}-${key}`}
                                        >
                                            {value}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="maindesktop-navigation">
                            <button onClick={handlePrev} className="btn">
                                Prev
                            </button>
                            <button onClick={handleNext} className="btn">
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default MainDesktop;
