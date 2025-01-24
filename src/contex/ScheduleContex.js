import React, { createContext, useEffect, useState } from 'react';
import { getScheduleFromLocalStorage } from '../helpers/manageLocalStorage';
import { schedulesFromDataBase } from '../schedules';
export const ScheduleContext = createContext();

function ScheduleContexProvider({ children }) {
    const [scheduleList, setScheduleList] = useState([]);
    const [schedule, setSchedule] = useState({});

    const scheduleFromLocalStorage = getScheduleFromLocalStorage();

    useEffect(() => {
        setScheduleList([
            ...scheduleFromLocalStorage,
            ...schedulesFromDataBase,
        ]);
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
            }}
        >
            {children}{' '}
        </ScheduleContext.Provider>
    );
}

export default ScheduleContexProvider;
