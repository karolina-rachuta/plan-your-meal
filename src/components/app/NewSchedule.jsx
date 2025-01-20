import React, { useContext, useState } from 'react';
import { RecipeContext } from '../../contex/RecipeContext';

function NewSchedule({ handleScreenChange }) {
    const { recipesList } = useContext(RecipeContext);
    const [meals, setMeals] = useState({
        monday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
        tuesday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
        wednesday: {
            breakfast1: '',
            breakfast2: '',
            lunch: '',
            dinner: '',
        },
        thursday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
        friday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
        saturday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
        sunday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    });

    console.log(meals);

    const handleMealChange = (day, mealType, value) => {
        setMeals((prevMeals) => ({
            ...prevMeals,
            [day]: {
                ...prevMeals[day],
                [mealType]: value,
            },
        }));
    };

    return (
        <div className="maindesktop__container add__container">
            <div className="add__title">
                <h1>New meal plan</h1>
                <button>Save and close</button>
            </div>
            <div className="add__top">
                <div className="add__row">
                    <label htmlFor="schedule_name" className="add__label">
                        Meal Plan Name
                    </label>
                    <input
                        type="text"
                        id="schedule_name"
                        placeholder="name of a meal plan"
                        className="add__input"
                    />
                </div>
                <div className="add__row">
                    <label
                        htmlFor="schedule_description"
                        className="add__label"
                    >
                        Meal Plan Description
                    </label>
                    <input
                        type="text"
                        id="schedule_description"
                        className="add__input"
                        placeholder="description of a meal plan"
                    />
                </div>
                <div className="add__row">
                    <label
                        htmlFor="schedule_week_number"
                        className="add__label"
                    >
                        Meal Plan Week
                    </label>
                    <input
                        type="number"
                        id="schedule_week_number"
                        className="add__input"
                    />
                </div>
            </div>

            <div className="add__botom add__bottom--col">
                <div className="add__row">
                    <p> </p>
                    <h4>Breakfast I</h4>
                    <h4>Breakfast II</h4>
                    <h4>Lunch</h4>
                    <h4>Dinner</h4>
                </div>
                <div className="add__botom add__bottom--col">
                    {Object.keys(meals).map((day) => (
                        <div className="add__row" key={day}>
                            <h4>
                                {day.charAt(0).toUpperCase() + day.slice(1)}
                            </h4>
                            {Object.keys(meals[day]).map((mealType) => (
                                <select
                                    key={mealType}
                                    value={meals[day][mealType]}
                                    onChange={(e) =>
                                        handleMealChange(
                                            day,
                                            mealType,
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">Select a meal</option>
                                    {recipesList?.map((meal, index) => (
                                        <option key={index} value={meal.name}>
                                            {meal.name}
                                        </option>
                                    ))}
                                </select>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewSchedule;
