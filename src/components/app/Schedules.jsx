import React, { useContext } from 'react';
import { ScheduleContext } from '../../contex/ScheduleContex';

import { schedulesFromDataBase } from '../../schedules';
import Edit from '../../assets/edit_modify_icon.png';
import TrashCan from '../../assets/trash_can_icon.png';

function Schedules() {
    const { scheduleList } = useContext(ScheduleContext);

    return (
        <div className="maindesktop__container table__container">
            <h1>List of meal plans</h1>
            <div className="row">
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
                        <div className="row">
                            <p>{id + 1}</p>
                            <p>{schedule.name}</p>
                            <p>{schedule.description}</p>
                            <p>{schedule.number}</p>
                            <p>
                                <img src={Edit} alt="" className="icon" />
                                <img src={TrashCan} alt="" className="icon" />
                            </p>
                        </div>
                    );
                })}
        </div>
    );
}

export default Schedules;
