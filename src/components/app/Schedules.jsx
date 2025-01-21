import React, { useContext, useEffect } from 'react';
import { ScheduleContext } from '../../contex/ScheduleContex';

function Schedules() {
    const { scheduleList } = useContext(ScheduleContext);

    return (
        <div className="maindesktop__container add__container">
            {scheduleList.map((schedule) => (
                <div>
                    <h4>Name: {schedule.name}</h4>
                    <p>Description: {schedule.description}</p>
                    <p>Week number: {schedule.number}</p>
                    <div className="add__botom add__bottom--col">
                        {Object.keys(schedule.mealPlan).map((day) => (
                            <div className="add__row" key={day}>
                                <h4>{day}</h4>
                                {Object.entries(schedule.mealPlan[day]).map(
                                    ([key, value]) => (
                                        <p key={`${day}-${key}`}>{value}</p>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Schedules;
