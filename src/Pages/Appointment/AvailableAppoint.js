import { format } from 'date-fns';
 import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
import {useQuery} from '@tanstack/react-query'
import Loading from '../Loading';

    const AvailableAppoint = ({selectedDate}) => {
    const [treatement, setTreatement] = useState(null);
    const date = format(selectedDate,'PP');


  const {data: appointmentOptions = [],refetch, isLoading } = useQuery({
    queryKey:["appointments",date],
    queryFn: async() => {
        const res = await fetch(`http://localhost:5000/appointments?date=${date}`);
        const data = await res.json();
        return data;
    }
  });
  if(isLoading){
    return <Loading></Loading>
  }
    
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
            refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppoint;