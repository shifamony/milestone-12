import React from 'react';
import img from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Button/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='my-20' style={{background:`url(${appointment})`}}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                    <img src={img} className="lg:w-1/2 lg:block hidden -mt-32 align-middle rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;