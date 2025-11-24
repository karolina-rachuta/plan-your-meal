import React, { useContext } from 'react';
import { ScheduleContext, type Schedule } from '../../contex/ScheduleContex';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';
import { deleteScheduleFromLocalStorage } from '../../helpers/manageLocalStorage';

function Schedules({
    handleScreenChange,
}: {
    handleScreenChange: (value: number) => void;
}) {
    const context = useContext(ScheduleContext);
    if (!context) {
        throw Error('Schedule context is undefined');
    }
    const { scheduleList, setScheduleList, setEditSchedule } = context;

    function handleDelete(id: string) {
        const updatedList = scheduleList.filter((s: Schedule) => s.id !== id);
        setScheduleList(updatedList);
        deleteScheduleFromLocalStorage(id);
    }

    function handleEdit(id: string) {
        const editedSchedule = scheduleList.find((s: Schedule) => s.id === id);
        if (!editedSchedule) return;
        setEditSchedule(editedSchedule);
        handleScreenChange(7);
    }

    return (
        <div className="maindesktop__container table__container">
            <h1>List of meal plans</h1>
            <div className="row row--schedule">
                <p>ID</p>
                <p>NAME</p>
                <p>DESCRIPTION</p>
                <p>WEEK</p>
                <p>ACTION</p>
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
