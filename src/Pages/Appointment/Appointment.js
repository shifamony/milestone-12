import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppoint from './AvailableAppoint';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <h1>Appointment</h1>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppoint
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AvailableAppoint>
        </div>
    );
};

export default Appointment;