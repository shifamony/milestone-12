import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatement,setTreatement, selectedDate}) => {
    const { name,slots } = treatement;
    const date = format(selectedDate,'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking);
        setTreatement(null);
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
                        <input type="text" value={date} disabled className="input w-full max-w-xs" />
                        <select name="slot" id="" className="select select-bor w-full">
                           
                           {
                            
                             slots.map((slot,i) => <option 
                                value={slot}
                                key={i}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input w-full input-bordered rounded-sm" />
                        <input type="email" name='email' placeholder="Your Email" className="input w-full input-bordered rounded-sm" />
                        <input type="text" name='phone' placeholder="Your Phone" className="input w-full input-bordered rounded-sm" />
                       
                        <input type="submit" className=' btn btn-dark w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;