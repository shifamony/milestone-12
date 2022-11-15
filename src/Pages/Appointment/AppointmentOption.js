import React from 'react';



const AppointmentOption = ({ appointmentOption, setTreatement}) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-center text-primary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'No Appointment'}</p>
                <p>{slots.length} {slots.length > 1 ? 'sapces' : 'space'}</p>
                <div className="card-actions justify-center ">
                <label 
                onClick={() => setTreatement(appointmentOption)}
                disabled={slots.length === 0}
                htmlFor="booking-modal" 
                className="btn btn-primary text-white rounded-none"
                >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;