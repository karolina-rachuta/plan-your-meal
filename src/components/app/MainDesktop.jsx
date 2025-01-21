import React, { useContext, useState } from 'react';
import Plus from '../../assets/add_plus.png';
import Exclamation from '../../assets/exclamation_mark_round_sign_icon.png';
import Information from '../../assets/information_line_icon.png';
import Check from '../../assets/check_mark_icon.png';
import { ScheduleContext } from '../../contex/ScheduleContex';
import { RecipeContext } from '../../contex/RecipeContext';

function MainDesktop({ handleScreenChange }) {
    const { addRecipeToRecipesList, recipesList, recipe, setRecipe } =
        useContext(RecipeContext);
    const { scheduleList } = useContext(ScheduleContext);
    const [planIndex, setPlanIndex] = useState(1);
    const selectedPlan = scheduleList.find(
        (schedule) => Number(schedule.number) === planIndex
    );
    const totalRecipes = recipesList.length;
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
                        You have {totalRecipes} recipes
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
            <div className="maindesktop__container add__container">
                {selectedPlan && (
                    <div>
                        <h4>Name: {selectedPlan.name}</h4>
                        <p>Description: {selectedPlan.description}</p>
                        <p>Week number: {selectedPlan.number}</p>
                        <div className="add__botom add__bottom--col">
                            {Object.keys(selectedPlan.mealPlan).map((day) => (
                                <div className="add__row" key={day}>
                                    <h4>{day}</h4>
                                    {Object.entries(
                                        selectedPlan.mealPlan[day]
                                    ).map(([key, value]) => (
                                        <p key={`${day}-${key}`}>{value}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainDesktop;
