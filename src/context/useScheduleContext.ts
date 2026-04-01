import { useContext } from 'react';
import { ScheduleContext } from './ScheduleContext';

function useScheduleContext() {
    const context = useContext(ScheduleContext);
    if (!context) {
        throw new Error('Context is undefines, please provide context');
    }
    return context;
}

export default useScheduleContext;
