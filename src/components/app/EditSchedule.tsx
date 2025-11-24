import React, { useContext, useState, useEffect } from 'react';
import { RecipeContext } from '../../contex/RecipeContext';
import {
    ScheduleContext,
    type DayMeals,
    type WeekSchedule,
    type Schedule,
} from '../../contex/ScheduleContex';
import { saveScheduleToLocalStorage } from '../../helpers/manageLocalStorage';

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

function EditSchedule({
    handleScreenChange,
}: {
    handleScreenChange: (value: number) => void;
}) {
    const [meals, setMeals] = useState<WeekSchedule>(INITIAL_MEAL);
    const [planName, setPlanName] = useState<string>('');
    const [planDescription, setPlanDescription] = useState<string>('');
    const [planWeekNumber, setPlanWeekNumber] = useState<string | number>('');
    const [, setScheduleId] = useState<string>('');

    const recipeContext = useContext(RecipeContext);

    if (!recipeContext) {
        throw Error('Recipe Context is undefined');
    }
    const { recipesList } = recipeContext;

    const scheduleContext = useContext(ScheduleContext);

    if (!scheduleContext) {
        throw Error('Schedule Context is undefined');
    }
    const { scheduleList, setScheduleList, setEditSchedule, editSchedule } =
        scheduleContext;

    useEffect(() => {
        if (editSchedule) {
            setMeals(editSchedule.mealPlan || INITIAL_MEAL);
            setPlanName(editSchedule.name || '');
            setPlanDescription(editSchedule.description || '');
            setPlanWeekNumber(editSchedule.number || '');
            setScheduleId(editSchedule.id || '');
        }
    }, [editSchedule]);

    const handleMealChange = (
        day: keyof WeekSchedule,
        mealType: keyof DayMeals,
        value: string
    ) => {
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
            // Tworzymy ZAKTUALIZOWANY obiekt planu,
            // ale z TYM SAMYM id co edytowany plan!
            if (!editSchedule) return;
            const newPlanMeal: Schedule = {
                id: editSchedule.id,
                name: planName,
                description: planDescription,
                number: planWeekNumber,
                mealPlan: meals,
            };

            // Podmieniamy stary plan na nowy

            const updatedList: Schedule[] = scheduleList.map((s) =>
                s.id === editSchedule?.id ? newPlanMeal : s
            );

            setScheduleList(updatedList);
            saveScheduleToLocalStorage(newPlanMeal);
            setEditSchedule(null);

            // Reset formularza
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

    function handlePlanNumber(e: React.ChangeEvent<HTMLInputElement>) {
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
                <h1>Edit meal plan</h1>
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
                    {(Object.keys(meals) as Array<keyof WeekSchedule>).map(
                        (day) => (
                            <div className="add__row" key={day}>
                                <h4>{day}</h4>
                                {(
                                    Object.keys(meals[day]) as Array<
                                        keyof DayMeals
                                    >
                                ).map((mealType) => (
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
                                        <option value="">Select a meal</option>{' '}
                                        {recipesList?.map((meal, index) => (
                                            <option
                                                key={index}
                                                value={meal.name}
                                            >
                                                {meal.name}
                                            </option>
                                        ))}
                                    </select>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default EditSchedule;
