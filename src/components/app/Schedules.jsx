import React, { useContext } from 'react';
import { ScheduleContext } from '../../contex/ScheduleContex';

function Schedules() {
    const { scheduleList, setScheduleList, schedule, setSchedule } =
        useContext(ScheduleContext);
    return (
        <div className="maindesktop__container">
            {scheduleList.map((schedule) => (
                <div>
                    <h4>{schedule.name}</h4>
                    <p>{schedule.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Schedules;
