import React, { useContext, useState } from 'react';
import { RecipeContext } from '../../contex/RecipeContext';
import { ScheduleContext } from '../../contex/ScheduleContex';
import { saveScheduleToLocalStorage } from '../../helpers/manageLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_MEAL = {
    Monday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Tuesday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Wednesday: {
        breakfast1: '',
        breakfast2: '',
        lunch: '',
        dinner: '',
    },
    Thursday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Friday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Saturday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Sunday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
};

function NewSchedule({ handleScreenChange }) {
    const { recipesList } = useContext(RecipeContext);
    const { scheduleList, addScheduleToSchedulesList } =
        useContext(ScheduleContext);

    const [meals, setMeals] = useState(INITIAL_MEAL);
    const [planName, setPlanName] = useState('');
    const [planDescription, setPlanDescription] = useState('');
    const [planWeekNumber, setPlanWeekNumber] = useState('');
    const [, setScheduleId] = useState('');

    const handleMealChange = (day, mealType, value) => {
        setMeals((prevMeals) => ({
            ...prevMeals,
            [day]: {
                ...prevMeals[day],
                [mealType]: value,
            },
        }));
    };

    function handleSaveMealPlan() {
        if (planName && planDescription && planWeekNumber) {
            const generatedScheduleId = uuidv4();
            setScheduleId(generatedScheduleId);
            const newPlanMeal = {
                id: generatedScheduleId,
                name: planName,
                description: planDescription,
                number: planWeekNumber,
                mealPlan: meals,
            };
            addScheduleToSchedulesList(newPlanMeal);
            saveScheduleToLocalStorage(newPlanMeal);
            setMeals(INITIAL_MEAL);
            setScheduleId('');
            setPlanName('');
            setPlanDescription('');
            setPlanWeekNumber('');
            handleScreenChange(1);
        } else {
            alert('Please fill in all fields and select meals for each day.');
        }
    }

    function handlePlanNumber(e) {
        const inputWeekNumber = Number(e.target.value);
        if (
            scheduleList.find(
                (schedule) => Number(schedule.number) === inputWeekNumber
            )
        ) {
            alert(
                `week number ${inputWeekNumber} already exists, please choose different`
            );
        } else {
            setPlanWeekNumber(e.target.value);
        }
    }
    return (
        <div className="maindesktop__container add__container">
            <div className="add__title">
                <h1>New meal plan</h1>
                <button onClick={handleSaveMealPlan} className="btn">
                    Save and close
                </button>
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
                        value={planName}
                        onChange={(e) => setPlanName(e.target.value)}
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
                        value={planDescription}
                        onChange={(e) => setPlanDescription(e.target.value)}
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
                        value={planWeekNumber}
                        onChange={handlePlanNumber}
                    />
                </div>
            </div>

            <div className="add__botom add__bottom--col">
                <div className="add__row">
                    <h4> </h4>
                    <h4>Breakfast I</h4>
                    <h4>Breakfast II</h4>
                    <h4>Lunch</h4>
                    <h4>Dinner</h4>
                </div>
                <div className="add__botom add__bottom--col">
                    {Object.keys(meals).map((day) => (
                        <div className="add__row" key={day}>
                            <h4>{day}</h4>
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
