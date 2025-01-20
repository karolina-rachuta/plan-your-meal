import React from 'react';

function NewSchedule({ handleScreenChange }) {
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
                <div className="add__row">
                    <h4>Monday</h4>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className="add__row">
                    <h4>Tuesday</h4>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className="add__row">
                    <h4>Wednesday</h4>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className="add__row">
                    <h4>Thursday</h4>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className="add__row">
                    <h4>Friday</h4>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className="add__row">
                    <h4>Saturday</h4>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className="add__row">
                    <h4>Sunday</h4>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default NewSchedule;
