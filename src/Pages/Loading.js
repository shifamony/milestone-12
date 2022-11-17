import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="spinner-border animate-spin inline-block w-80">
                <span className="visually-hidden">Loding...........</span>
            </div>
        </div>
    );
};

export default Loading;