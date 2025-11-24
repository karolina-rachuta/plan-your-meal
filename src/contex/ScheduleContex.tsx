import React, { createContext, useEffect, useState, type ReactNode } from 'react';
import { getScheduleFromLocalStorage } from '../helpers/manageLocalStorage';
import { schedulesFromDataBase } from '../data/schedules';

type DayMeals = {
    breakfast1: string;
    breakfast2: string;
    lunch: string;
    dinner: string;
};

type WeekSchedule = {
    Monday: DayMeals;
    Tuesday: DayMeals;
    Wednesday: DayMeals;
    Thursday: DayMeals;
    Friday: DayMeals;
    Saturday: DayMeals;
    Sunday: DayMeals;
};

type Schedule = {
    id: string;
    name: string;
    description: string;
    week: WeekSchedule;
};

type ScheduleContextType = {
    addScheduleToSchedulesList: (value: Schedule) => void;
    scheduleList: Schedule[];
    setScheduleList: React.Dispatch<React.SetStateAction<Schedule[]>>;
    schedule: Schedule;
    setSchedule: React.Dispatch<React.SetStateAction<Schedule>>;
    editSchedule: Schedule | null;
    setEditSchedule: React.Dispatch<React.SetStateAction<Schedule | null>>;
};

const initialWeek: WeekSchedule = {
    Monday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Tuesday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Wednesday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Thursday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Friday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Saturday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Sunday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
};


export const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

function ScheduleContextProvider({ children }: { children: ReactNode }) {
    const [scheduleList, setScheduleList] = useState<Schedule[]>([]);
    const [schedule, setSchedule] = useState<Schedule>({
        id: '',
        name: '',
        description: '',
        week: initialWeek,
    });
    const [editSchedule, setEditSchedule] = useState<Schedule | null>(null);

    useEffect(() => {
        const scheduleFromLocalStorage = getScheduleFromLocalStorage();
        const combinedSchedules = [
            ...schedulesFromDataBase,
            ...scheduleFromLocalStorage,
        ];
        setScheduleList(combinedSchedules);
    }, []);

    function addScheduleToSchedulesList(schedule: Schedule) {
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

export default ScheduleContextProvider;
