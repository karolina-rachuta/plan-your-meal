import React, { createContext, useEffect, useState } from 'react';
import { getScheduleFromLocalStorage } from '../helpers/manageLocalStorage';
import { schedulesFromDataBase } from '../data/schedules';

export const ScheduleContext = createContext();

function ScheduleContexProvider({ children }) {
    const [scheduleList, setScheduleList] = useState([]);
    const [schedule, setSchedule] = useState({});
    const [editSchedule, setEditSchedule] = useState(null);

    useEffect(() => {
        const scheduleFromLocalStorage = getScheduleFromLocalStorage();
        const combinedSchedules = [
            ...schedulesFromDataBase,
            ...scheduleFromLocalStorage,
        ];
        setScheduleList(combinedSchedules);
    }, []);

    function addScheduleToSchedulesList(schedule) {
        setScheduleList((prev) => [...prev, schedule]);
    }

    return (
        <ScheduleContext.Provider
            value={{
                addScheduleToSchedulesList,
                scheduleList,
                setScheduleList,
                schedule,
                setSchedule,
                editSchedule,
                setEditSchedule,
            }}
        >
            {children}{' '}
        </ScheduleContext.Provider>
    );
}

export default ScheduleContexProvider;
