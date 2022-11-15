import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';


const AvailableAppoint = ({selectedDate,setSelectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatement, setTreatement] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAppointmentOptions(data);
        })
    },[])
    return (
        <section className='my-32'>
            <p className='text-center text-primary font-bold'>Availabel Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
               {
                appointmentOptions.map(appointmentOption => <AppointmentOption
                    key={appointmentOption._id}
                    appointmentOption={appointmentOption}
                    setTreatement={setTreatement}
                ></AppointmentOption>)
               
               }
            </div>
           { 
           treatement &&
           <BookingModal
            treatement={treatement}
            selectedDate={selectedDate}
            setTreatement={setTreatement}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppoint;
