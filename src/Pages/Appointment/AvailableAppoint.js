import { format } from 'date-fns';
import React from 'react';

const AvailableAppoint = ({selectedDate,setSelectedDate}) => {
    return (
        <div>
            <p className='text-center text-primary font-bold'>Availabel Appointment on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppoint;