import React, { useContext } from 'react';
import { ScheduleContext } from '../../contex/ScheduleContex';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';

function Schedules({ handleScreenChange }) {
    const { scheduleList, setScheduleList, setEditSchedule } =
        useContext(ScheduleContext);

    function handleDelete(id) {
        const updatedList = scheduleList.filter((_, index) => index !== id);
        setScheduleList([...updatedList]);
    }

    function handleEdit(id) {
        const editedSchedule = scheduleList.find((_, index) => index === id);
        setEditSchedule({ ...editedSchedule });
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
                                    onClick={() => handleEdit(id)}
                                />
                                <img
                                    src={TrashCan}
                                    alt="Trash can"
                                    className="icon"
                                    onClick={() => handleDelete(id)}
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Schedules;
