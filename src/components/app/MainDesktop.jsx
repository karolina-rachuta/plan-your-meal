import React, { useContext, useState } from 'react';
import Plus from '../../assets/add_plus.png';
import Exclamation from '../../assets/exclamation_mark_round_sign_icon.png';
import Information from '../../assets/information_line_icon.png';
import Check from '../../assets/check_mark_icon.png';
import { ScheduleContext } from '../../contex/ScheduleContex';
import { RecipeContext } from '../../contex/RecipeContext';

function MainDesktop({ handleScreenChange }) {
    const { recipesList } = useContext(RecipeContext);
    const { scheduleList } = useContext(ScheduleContext);
    const [planIndex, setPlanIndex] = useState(1);
    const selectedPlan = scheduleList.find(
        (schedule) => Number(schedule.number) === planIndex
    );
    const totalRecipes = recipesList.length;
    const totalSchedules = scheduleList.length;

    function handlePrev() {
        if (planIndex > 1) {
            setPlanIndex((prev) => prev - 1);
        }
    }

    function handleNext() {
        if (planIndex < totalSchedules) {
            setPlanIndex((prev) => prev + 1);
        }
    }
    return (
        <div className="maindesktop__container">
            <div className="maindesktop__top">
                <div className="maindesktop__widget">
                    <button
                        className="widget__box"
                        onClick={() => handleScreenChange(4)}
                    >
                        <img src={Plus} alt="Plus" className="widget__add" />
                        Add Recipe
                    </button>
                    <button
                        className="widget__box"
                        onClick={() => handleScreenChange(5)}
                    >
                        <img src={Plus} alt="Plus" className="widget__add" />{' '}
                        Add Meal Plan
                    </button>
                </div>
                <div className="maindesktop__widget maindesktop__widget--col">
                    <p className="widget__box widget__box--right">
                        <img
                            src={Information}
                            alt="Information"
                            className="widget__add--right"
                        />
                        You have {totalRecipes} recipes
                    </p>
                    <p className="widget__box widget__box--right">
                        <img
                            src={Exclamation}
                            alt="Exclamation"
                            className="widget__add--right"
                        />
                        Remember to add a meal plan!
                    </p>
                    <p className="widget__box widget__box--right">
                        <img
                            src={Check}
                            alt="Check"
                            className="widget__add--right"
                        />{' '}
                        So glad you're here! Happy planning and bon appétit!
                    </p>
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
                                        selectedPlan.mealPlan[day]
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
