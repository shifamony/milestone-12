import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary rounded-none">{children}</button>
    );
};

export default PrimaryButton;