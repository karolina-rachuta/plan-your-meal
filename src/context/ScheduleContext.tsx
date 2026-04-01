import React, { createContext, useEffect, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { getScheduleFromLocalStorage } from '../helpers/manageLocalStorage';
import { schedulesFromDataBase } from '../data/schedules';

export type DayMeals = {
    breakfast1: string;
    breakfast2: string;
    lunch: string;
    dinner: string;
};

type DayOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

export type WeekSchedule = Record<DayOfWeek, DayMeals>;

export type Schedule = {
    id: string;
    name: string;
    description: string;
    number: number;
    mealPlan: WeekSchedule;
};

export const INITIAL_WEEK: WeekSchedule = {
    Monday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Tuesday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Wednesday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Thursday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Friday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Saturday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
    Sunday: { breakfast1: '', breakfast2: '', lunch: '', dinner: '' },
};

export const INITIAL_SCHEDULE: Schedule = {
    id: '',
    name: '',
    description: '',
    number: 0,
    mealPlan: INITIAL_WEEK,
};

type ScheduleContextType = {
    addScheduleToSchedulesList: (value: Schedule) => void;
    scheduleList: Schedule[];
    setScheduleList: Dispatch<SetStateAction<Schedule[]>>;
    schedule: Schedule;
    setSchedule: Dispatch<SetStateAction<Schedule>>;
    editSchedule: Schedule;
    setEditSchedule: Dispatch<SetStateAction<Schedule>>;
};

export const ScheduleContext = createContext<ScheduleContextType | undefined>(
    undefined
);

function ScheduleContextProvider({ children }: { children: ReactNode }) {
    const [scheduleList, setScheduleList] = useState<Schedule[]>([]);
    const [schedule, setSchedule] = useState<Schedule>(INITIAL_SCHEDULE);
    const [editSchedule, setEditSchedule] =
        useState<Schedule>(INITIAL_SCHEDULE);

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
            {children}
        </ScheduleContext.Provider>
    );
}

export default ScheduleContextProvider;
