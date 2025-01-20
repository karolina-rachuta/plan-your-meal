import React, { createContext, useState } from 'react';

export const ScheduleContext = createContext();

function ScheduleContexProvider({ children }) {
    const [scheduleList, setScheduleList] = useState([]);
    const [schedule, setSchedule] = useState({});
    return (
        <ScheduleContext.Provider
            value={{
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
