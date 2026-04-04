import React from 'react';
import { type Schedule } from '../../context/ScheduleContext';
import Edit from '../../assets/pencil.svg';
import TrashCan from '../../assets/trash.svg';
import { deleteScheduleFromLocalStorage } from '../../helpers/manageLocalStorage';
import useScheduleContext from '../../context/useScheduleContext';

type Table_Hdl = (typeof TABLE_HEADERS)[number];
const TABLE_HEADERS = [
    'ID',
    'NAME',
    'INGREDIENTS',
    'INSTRUCTION',
    'ACTION',
] as const;

type Props = {
    onScreenChange: (value: number) => void;
};

function Schedules({ onScreenChange }: Props) {
    const { scheduleList, setScheduleList, setEditSchedule } =
        useScheduleContext();

    function handleDelete(id: string) {
        const updatedList = scheduleList.filter((s: Schedule) => s.id !== id);
        setScheduleList(updatedList);
        deleteScheduleFromLocalStorage(id);
    }

    function handleEdit(id: string) {
        const editedSchedule = scheduleList.find((s: Schedule) => s.id === id);
        if (!editedSchedule) return;
        setEditSchedule(editedSchedule);
        onScreenChange(7);
    }

    return (
        <div className="maindesktop__container table__container">
            <h1 className="hdl">List of meal plans</h1>
            <div className="row row--schedule">
                {TABLE_HEADERS.map((header, index) => (
                    <p className="row__hdl" key={index}>
                        {header}
                    </p>
                ))}
            </div>
            {scheduleList
                .sort((a, b) => Number(a.number) - Number(b.number))
                .map((schedule, id) => {
                    return (
                        <div className="row row--schedule" key={schedule.id}>
                            <p>{id + 1}</p>
                            <p>{schedule.name}</p>
                            <p>{schedule.description}</p>
                            <p>{schedule.number} week</p>
                            <div className="action__btn">
                                <img
                                    src={Edit}
                                    alt="Pencil"
                                    className="icon"
                                    onClick={() => handleEdit(schedule.id)}
                                />
                                <img
                                    src={TrashCan}
                                    alt="Trash can"
                                    className="icon"
                                    onClick={() => handleDelete(schedule.id)}
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Schedules;
